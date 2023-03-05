import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { ScanMain } from './ScanMain';
import ScanResults from './ScanResults';
import ScanHistory from './ScanHistory';
import ScanSearch from './ScanSearch';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function ScanScreen() {
  
  return (
    <Stack.Navigator> 
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScanMain" component={ScanMain} options={{ title: 'Scan' }} ></Stack.Screen>
        <Stack.Screen name="ScanResults" component={ScanResults} options={{ title: 'Results' }} />
        <Stack.Screen name="ScanHistory" component={ScanHistory} options={{ title: 'History' }} />
        <Stack.Screen name="ScanSearch" component={ScanSearch} options={{ title: 'Text Search' }} />
      </Stack.Group>
    </Stack.Navigator> 
  );
}