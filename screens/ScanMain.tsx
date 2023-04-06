import React from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Box, View, Text, Image } from 'native-base';
import * as MediaLibrary from 'expo-media-library';
import Button from '../components/Button';
import GalleryIcon from '../assets/images/galleryIcon.svg'
import SearchIcon from '../assets/images/searchIcon.svg'
import ScanCaptureButton from '../assets/images/scanCaptureButton.svg'
import ScanFrame from '../assets/images/scanFrame.png'
import * as ImagePicker from 'expo-image-picker';
import { useAppSelector, useAppDispatch } from '../stores/hooks';
import { useNavigation } from '@react-navigation/native';
import { API, COLORS } from '../common/constants';
import server from '../common/server';
import ScanIntro from './ScanIntro';
import ScanResultsLoading from '../components/ScanResultsLoading';


export function ScanMain() {
  const [hasCamPermission, setHasCamPermission] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);
  const showScanIntro = useAppSelector(state => state.user.showScanIntro);
  const [image, setImage] = useState(null);
  // @ts-ignore
    const [type] = useState(Camera.Constants.Type.back);
  // @ts-ignore
  const [flash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  let { token: userToken } = useAppSelector((state) => state.user);
  const navigation = useNavigation()
  let dispatch = useAppDispatch();

  const sendRequest = async () => {
    if (!image) return;
    let body = new FormData();
    body.append('file', { uri: image, name: 'photo.png',filename :'imageName.png',type: 'image/png'});
    body.append('Content-Type', 'image/png');

    setLoadingResults(true);
    const resp = await server.post(API.emissions, body, {
      dispatch,
      headers: {  
        "Content-Type": "multipart/form-data",
      },
    })
    setLoadingResults(false);
    if(resp.status === 201){
      navigation.navigate('ScanResults', {
        title: 'Results',
        response: { ...resp.data, uri: image }
      })
    }else {
      navigation.navigate('ScanResults', {
        title: 'Error',
        response: { error: resp.message, uri: image }
      })
    }
   
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCamPermission(cameraStatus.status === 'granted');
    })()
  }, []);

  useEffect(() => {
    sendRequest();
  }, [image]);


  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data =  await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch(error) {
        console.log(error)
      }
    }
  }

  const savePicture = async () => {
    if (image) {
      try {
        const resSaving = await MediaLibrary.createAssetAsync(image);
        sendRequest();
        setImage(null);
      } catch(error) {
        console.log(error)
      }
    }
  }

  const goTo = (route) => {
    navigation.navigate(route)
  }


  if (!hasCamPermission) {
    return <Box {...styles.container}><Text>No access to camera</Text></Box>
  }

  if (showScanIntro) {
    return <ScanIntro/>
  }

  if (loadingResults) {
    return <ScanResultsLoading />
  }

  return (
    <View {...styles.container}>
      <Box width="100%" height="85%">
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef} />
        <Box {...styles.scanBottomActionsContainer}>
          {/* <Image src={ScanFrame} alt="frame" zIndex={100} width="100%" style={styles.scanFrame}/> */}
          <TouchableOpacity onPress={pickImage} style={styles.actionContainer}>
            <GalleryIcon fill={COLORS.darkOrange} />
            <Text color={COLORS.black} bold>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <ScanCaptureButton />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionContainer} onPress={() => goTo('ScanSearch')}>
            <SearchIcon fill={COLORS.darkOrange} />
            <Text color={COLORS.black} bold>Text Search</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    width: '100%',
  },
  scanBottomActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: '100%',
    left: '0%',
    right: '0%',
    zIndex: 100,
  },
  actionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanFrame: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%',
  },
  scanTopActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '0%',
    left: '0%',
    right: '0%',
    zIndex: 100,
    margin: 5,
  }
});