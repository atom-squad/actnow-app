import  React,  { useState, useEffect } from 'react' ;
import { Flex, FormControl, Input, Pressable, Icon, Text, Image, Link} from 'native-base';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import styles from '../css/LogInStyles';
import localStorage from '../common/localStorage';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useAppDispatch } from '../stores/hooks';

function Login({ setToken, setScreen, navigation }) {

    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const logoLeaves = require('../assets/images/logoLeaves.png');

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
                
        <Image source={logoLeaves} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100} style=  {styles.imagePosition} />

        <Text alignSelf="flex-start" color={COLORS.primaryOrange} fontSize={40}>Welcome Back,</Text>
        <Text alignSelf="flex-start">Let's make earth a better place to live,</Text>
        <Text alignSelf="flex-start"> one action at a time.</Text>

        <FormControl marginBottom={2} marginTop={10}  isRequired>
          <FormControl.Label _text={{ bold: true, color: 'black'  }}>Email</FormControl.Label>
          <Input placeholder="Email" value={email} onChangeText={setEmail} size="lg" marginY="1"  _focus={{borderColor: COLORS.greenPrimary , borderWidth: 1, backgroundColor: "white"}} />
        </FormControl>

        <FormControl marginY="2" isRequired>
          <FormControl.Label _text={{ bold: true, color: 'black' }}>Password</FormControl.Label>
          <Input placeholder="Password" 
            size="lg"  
            value={password}
            onChangeText={setPassword} 
            marginY="1"
            _focus={{borderColor: COLORS.greenPrimary , borderWidth: 1, backgroundColor: "white" }}
            type={show ? "text" : "password"} 
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" />
              </Pressable>} 
            />
        </FormControl>

        <Link href="https://nativebase.io" alignSelf="flex-end" marginBottom={10} >
          Forgot Password? 
        </Link>

        <Pressable borderWidth={1} style={styles.logInButton} alignItems="center" onPress={login}>
          <Text color="white" bold>Log In </Text>
        </Pressable>

        <Pressable  borderWidth={1} style={styles.signUpButton} alignItems="center" onPress={() => navigation.push("SignUpOne")}>
          <Text color={COLORS.greenPrimary} bold>Sign Up </Text>
        </Pressable>

        <Link href="https://nativebase.io" _text={{color: COLORS.green60 }}>
          Terms of Privacy
        </Link>

      </Flex>
    );
}

export default Login;
