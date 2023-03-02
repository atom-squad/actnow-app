import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import localStorage from './common/localStorage';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [screen, setScreen] = useState('login')
  const [token, setToken] = useState('token')
  

  useEffect(() => {
    (async () => {
      const storedToken = await localStorage.getItem('token');
      setToken(storedToken);
    })();
  }, []);
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          { token ? 
            <Navigation colorScheme={"light"} />
            : <>
              {/* <SignUp /> */}
              <LogIn setToken={(newToken) => setToken(newToken)} setScreen={setScreen} />
            </>
          }
          <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}
