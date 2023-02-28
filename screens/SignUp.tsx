import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import SignUpTwoScreen from  '../components/SignUpTwoScreen';
import SignUpOneScreen from '../components/SignUpOneScreen';

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

export default SignUp;