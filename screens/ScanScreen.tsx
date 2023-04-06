import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { ScanMain } from './ScanMain';
import ScanResults from './ScanResults';
import ScanHistory from './ScanHistory';
import ScanSearch from './ScanSearch';
import { Text } from 'native-base';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/images/back-icon.svg';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function ScanScreen() {
  const navigation = useNavigation();
  
  return (
    <Stack.Navigator> 
      <Stack.Group screenOptions={{ headerShown: true }}>
        <Stack.Screen
        name="ScanMain"
        component={ScanMain}
        options={{
          title: 'Scan',
          headerLeft: () => <Pressable onPress={() => navigation.goBack()}><BackIcon/></Pressable>,
          headerRight: () => <Pressable onPress={() => navigation.navigate('ScanHistory')}><Text>History</Text></Pressable> 
        }} ></Stack.Screen>
        <Stack.Screen name="ScanResults" component={ScanResults} options={{ title: 'Scan Result' }} />
        <Stack.Screen name="ScanHistory" component={ScanHistory} options={{ title: 'History' }} />
        <Stack.Screen name="ScanSearch" component={ScanSearch} options={{ title: 'Text Search' }} />
      </Stack.Group>
    </Stack.Navigator> 
  );
}