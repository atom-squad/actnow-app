import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Box, View, Text, Image} from 'native-base';
import { RootTabScreenProps } from '../types';
import * as MediaLibrary from 'expo-media-library';
import Button from '../components/Button';
import { makeRequest } from '../common/api';


export default function ScanScreen({ navigation }: RootTabScreenProps<'Scan'>) {

  const [hasCamPermission, setHasCamPermission] = useState(null);
  const [image, setImage] = useState(null);
  // @ts-ignore
    const [type] = useState(Camera.Constants.Type.back);
  // @ts-ignore
  const [flash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const sendRequest = () => {
    let body = new FormData();
    body.append('file', { uri: image, name: 'photo.png',filename :'imageName.png',type: 'image/png'});
    body.append('Content-Type', 'image/png');

    makeRequest('/scanner/emission', 'POST', { headers: {  
        "Content-Type": "multipart/form-data",
        "otherHeader": "foo",
        } , body :body
      } )
      .then((res) => res.json())
      .then((res) => { console.log("response" +JSON.stringify(res)); })
      .catch((e) => console.log(e))
  }

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
        await MediaLibrary.createAssetAsync(image);
        alert('Image saved!')
        sendRequest();
        setImage(null);
      } catch(error) {
        console.log(error)
      }
    }
  }


  if (!hasCamPermission) {
    return <Text>No access to camera</Text>
  }

  return (
    <Box {...styles.container}>
      {!image ? <Box width="100%" height="80%">
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef} />
        <Box>
          <Button title={'Take a picture'} icon="camera" onPress={takePicture} color={undefined}/>
        </Box>
      </Box>:
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
      }
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  camera: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
  }
});
