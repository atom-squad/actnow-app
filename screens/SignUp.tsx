import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import SignUpTwoScreen from  '../components/SignUpTwoScreen';
import SignUpOneScreen from '../components/SignUpOneScreen';
import InitialScreen from '../components/InitialScreen';
import LogIn from '../components/LogIn';

const Stack = createNativeStackNavigator<RootStackParamList>();

function SignUp() {
    return (
            <NavigationContainer>
            <Stack.Navigator
            initialRouteName="InitialScreen"
            screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="InitialScreen" component={InitialScreen} />
                <Stack.Screen name="LogIn" component={LogIn} /> 
                <Stack.Screen name="SignUpOne" component={SignUpOneScreen} />
                <Stack.Screen name="SignUpTwo" component={SignUpTwoScreen} />
            </Stack.Navigator> 
            </NavigationContainer>
    );
}

export default SignUp;