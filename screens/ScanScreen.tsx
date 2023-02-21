import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Text, View, Image} from 'native-base';
import { RootTabScreenProps } from '../types';
import * as MediaLibrary from 'expo-media-library';
import Button from '../components/Button';


export default function ScanScreen({ navigation }: RootTabScreenProps<'Scan'>) {

  const [hasCamPermission, setHasCamPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);
  const [flash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

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
        console.log(data)
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
    <View style={styles.container}>
      {!image ? <>
      <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef} />
      <View>
        <Button title={'Take a picture'} icon="camera" onPress={takePicture} color={undefined}/>
      </View>
      </>:
      <>
        <Image source={{uri: image}} styles={styles.camera} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 50
        }}>
          <Button title={'Re-take'} icon="retweet" onPress={takePicture}/>
          <Button title={'Save'} icon="check" onPress={savePicture}/>
        </View>
      </>
      }
    </View>
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
    borderRadius: 20,
  }
});
