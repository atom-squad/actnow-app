import * as React from 'react';
import { Text, View } from '../components/Themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import icon from '../assets/images/icon.png';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function SignUpOneScreen({navigation}) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [organisation, setOrganisation] = React.useState('');
  const [department, setDepartment] = React.useState('');


    return (
            <View style={styles.container}>
             <Image  source={icon} accessibilityLabel="Act Now Logo" style={styles.iconStyle} />
            <TextInput placeholder='Organisation' value={organisation} onChangeText={setOrganisation} style={styles.input} />
            <TextInput placeholder='Department' value={department}  onChangeText={setDepartment}  style={styles.input} />
            <TextInput placeholder='Email' value={username}  onChangeText={setUsername} style={styles.input} />
            <TextInput placeholder='Password' value={password}  onChangeText={setPassword}style={styles.input} />
            {/* make function call to check if all fields are filled or not */}
            <TouchableOpacity style={styles.button} onPress={() =>navigation.push("SignUpTwo") }>
                <Text style={styles.buttonText} >Let's Start</Text>
            </TouchableOpacity>
        </View>
    );
}

function SignUpTwoScreen() {
    return (
        <View>
              <Image  source={icon} accessibilityLabel="Act Now Logo" style={styles.iconStyle} />
              <Text>Add Picture</Text>
            <TextInput placeholder='Full Name' style={styles.input} />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} >Take Survey</Text>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function SignUp() {
    return (
            <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen name="SignUpOne" component={SignUpOneScreen} />
                <Stack.Screen name="SignUpTwo" component={SignUpTwoScreen} />
            </Stack.Navigator> 
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
         alignItems: 'center',
        flexDirection: 'column',
        boxSizing: 'border-box',
        width:'100%'
    },

    input: {
        width: '85%',
        borderWidth: 1,
        padding: 4,
        margin:8,
        height: 40,
        borderRadius: 4,
        alignSelf: 'center'
      },

      button: {
        alignSelf: "center",
        borderWidth: 1,
        width: "70%",
       height: 40,
        padding: 4,
        margin: 16,
        justifyContent: 'center',
        borderRadius: 4
      },

      buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
      },

      iconStyle: {
        maxWidth: '100%',
         maxHeight: '20%',
        width: '50%',
        resizeMode: 'contain',
        alignSelf: 'center',
      }
});

export default SignUp;