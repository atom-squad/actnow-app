import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import SignUp from './screens/SignUp';
import localStorage from './common/localStorage';
import { useAppDispatch, useAppSelector } from "./stores/hooks";
import { updateToken } from './stores/slices/userSlice';
import { Provider } from 'react-redux';
import { store } from './stores/store';

function App() {
  const isLoadingComplete = useCachedResources();
  const [token, setToken] = useState('')
  let { token: userToken } = useAppSelector((state) => state.user);
  let dispatch = useAppDispatch();
  

  useEffect(() => {
    (async () => {
      const storedToken = await localStorage.getItem('token');
      dispatch(updateToken(storedToken))
    })();
  }, []);
  
  useEffect(() => {
    setToken(userToken);
  }, [userToken]);
  
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
        { token ? 
            <Navigation colorScheme={"light"} />
            : 
            <SignUp /> 
          }
          <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}

export default function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}