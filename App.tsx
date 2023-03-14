import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import SignUp from './screens/SignUp';
import LogIn from './components/LogIn';
import localStorage from './common/localStorage';
import { useAppDispatch, useAppSelector } from "./stores/hooks";
import { updateToken } from './stores/slices/userSlice';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import InitialScreen from './components/InitialScreen';


function App() {
  const isLoadingComplete = useCachedResources();
  const [screen, setScreen] = useState('login')
  const [token, setToken] = useState('')
  let { token: userToken } = useAppSelector((state) => state.user);
  let dispatch = useAppDispatch();
  

  useEffect(() => {
    (async () => {
      const storedToken = await localStorage.getItem('token');
      dispatch(updateToken(token))
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
            : <>
              {/* <SignUp /> */}
              <LogIn setToken={(newToken) => setToken(newToken)} setScreen={setScreen} />
            </>
          }
          {/* <InitialScreen navigation={undefined} /> */}
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