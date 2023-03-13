import React from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Box, View, Text, Image } from 'native-base';
import * as MediaLibrary from 'expo-media-library';
import Button from '../components/Button';
import GalleryIcon from '../assets/images/galleryIcon.svg'
import SearchIcon from '../assets/images/searchIcon.svg'
import UncheckIcon from '../assets/images/uncheckIcon.svg'
import * as ImagePicker from 'expo-image-picker';
import { useAppSelector, useAppDispatch } from '../stores/hooks';
import { useNavigation } from '@react-navigation/native';
import { API, COLORS } from '../common/constants';
import server from '../common/server';


export function ScanMain() {
  const [hasCamPermission, setHasCamPermission] = useState(null);
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

    const resp = await server.post(API.emissions, body, {
      dispatch,
      headers: {  
        "Content-Type": "multipart/form-data",
      },
    })
    navigation.navigate('ScanResults', {
      title: 'Results',
      response: resp.data
    })
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      sendRequest();
    }
  };


  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCamPermission(cameraStatus.status === 'granted');
    })()
  }, []);

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

  return (
    <View {...styles.container}>
      {!image ? (
      <Box width="100%" height="85%">
        <Box { ...styles.scanTopActionsContainer}>
          <TouchableOpacity onPress={() => goTo('ScanHistory')}>
            <Text color={COLORS.white}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goTo('Dashboard')}>
            <UncheckIcon fill={COLORS.white} />
          </TouchableOpacity>
        </Box>
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef} />
        <Box {...styles.scanBottomActionsContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.actionContainer}>
            <GalleryIcon fill={COLORS.primary} />
            <Text color={COLORS.primary} >Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.captureButton}></TouchableOpacity>
          <TouchableOpacity style={styles.actionContainer} onPress={() => goTo('ScanSearch')}>
            <SearchIcon fill={COLORS.primary} />
            <Text color={COLORS.primary}>Text Search</Text>
          </TouchableOpacity>
        </Box>
      </Box>) : (
      <>
        <Image source={{uri: image}} {...styles.camera} alt="capture"/>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 50
        }}>
          <Button title={'Re-take'} icon="retweet" onPress={() => setImage(null)} color={undefined} />
          <Button title={'Save'} icon="check" onPress={savePicture} color={undefined} />
        </View>
      </>
      )}
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
  captureButton: {
    width: 62,
    height: 62,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  scanBottomActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: '103%',
    left: 0,
    right: 0,
    zIndex: 100,
  },
  actionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanTopActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    margin: 5,
  }

});