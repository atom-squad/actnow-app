import  React,  { useState, useEffect } from 'react' ;
import { Flex, FormControl, Input, Pressable, Icon, Text, Image, Link} from 'native-base';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import icon from '../assets/images/icon.png';
import styles from '../css/LogInStyles';
import localStorage from '../common/localStorage';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useAppDispatch } from '../stores/hooks';

function Login({ setToken, setScreen }) {

    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const login = async () => {
      if (email && password) {
        const resp = await server.post(API.login, {
          email,
          password
        }, { dispatch });
        const { token } = resp.data;
        setToken(token);
        localStorage.setItem('token', token);
      }
    }

    return (
      <Flex direction="column" align="center"  height="100%" marginX="4">
                
        <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100}  borderRadius={100} style=  {styles.imagePosition} />

        <FormControl marginY="2" isRequired>
          <FormControl.Label _text={{ bold: true, color: 'black'  }}>Email</FormControl.Label>
          <Input placeholder="Email" value={email} onChangeText={setEmail} size="lg" marginY="1"  _focus={{borderColor: COLORS.greenPrimary , borderWidth: 1}} />
        </FormControl>

        <FormControl marginY="2" isRequired>
          <FormControl.Label _text={{ bold: true, color: 'black' }}>Password</FormControl.Label>
          <Input placeholder="Password" 
            size="lg"  
            value={password}
            onChangeText={setPassword} 
            marginY="1"
            _focus={{borderColor: COLORS.greenPrimary , borderWidth: 1}}
            type={show ? "text" : "password"} 
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" />
              </Pressable>} 
            />
        </FormControl>

        <Link href="https://nativebase.io" alignSelf="flex-end">
          Forgot Password? 
        </Link>

        <Pressable borderWidth={1} style={styles.logInButton} alignItems="center" onPress={login}>
          <Text color="white" bold>Log In </Text>
        </Pressable>

        <Pressable  borderWidth={1} style={styles.signUpButton} alignItems="center" onPress={() => setScreen('signup')}>
          <Text color={COLORS.greenPrimary} bold>Sign Up </Text>
        </Pressable>

        <Link href="https://nativebase.io" _text={{color: COLORS.green60 }}>
          Terms of Privacy
        </Link>

      </Flex>
    );
}

export default Login;
