import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Navigation colorScheme={colorScheme} />
          {/* <SignUp /> */}
          {/* <LogIn /> */}
          <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}
