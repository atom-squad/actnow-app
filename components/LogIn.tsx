import  React,  { useState, useEffect } from 'react' ;
import { Flex, FormControl, Input, Pressable, Icon, Text, Image, Link, AlertDialog, Button} from 'native-base';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import styles from '../css/LogInStyles';
import localStorage from '../common/localStorage';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useAppDispatch } from '../stores/hooks';
import { updateToken } from '../stores/slices/userSlice';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const cancelRef = React.useRef(null);
    const [isErrorOpen, setIsErrorOpen] = React.useState(false);
    const [errorMsg, setErrorMsg] = useState('There is a server connection problem. Try again later.');

    const logoLeaves = require('../assets/images/logoLeaves.png');

    const onCloseError = () => {
      setIsErrorOpen(false);
    }

    const login = async () => {
      if (email && password) {
        const resp = await server.post(API.login, {
          email,
          password
        }, { dispatch });
        if(resp.status === 200){
          const { token } = resp.data;
          dispatch?.(updateToken(resp.data));
          localStorage.setItem('token', token);
        }else if(resp.status === 401){
          setErrorMsg("Your credentials are wrong. Try again.");
          setIsErrorOpen(true);
        }else{
          setErrorMsg("There is a server connection problem. Try again later.");
          setIsErrorOpen(true);
        }
        
      }
    }

    return (
      <Flex direction="column" align="center"  height="100%" marginX="4">
                
        <Image source={logoLeaves} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100} style=  {styles.imagePosition} />

        <FormControl marginBottom={2} isRequired>
          <FormControl.Label _text={{ bold: true, color: 'black', fontFamily:"albert-semibold"  }}>Email</FormControl.Label>
          <Input placeholder="Email" value={email} onChangeText={setEmail} size="lg" marginY="1"  _focus={{borderColor: COLORS.greenPrimary , borderWidth: 1, backgroundColor: "white"}} />
        </FormControl>

        <FormControl marginY="2" isRequired>
          <FormControl.Label _text={{ bold: true, color: 'black', fontFamily:"albert-semibold" }}>Password</FormControl.Label>
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

        <Link href="https://nativebase.io" alignSelf="flex-end" marginBottom={10} fontFamily="albert-medium" fontSize={14} >
          Forgot Password? 
        </Link>

        <Pressable borderWidth={1} style={styles.logInButton} alignItems="center" onPress={login}>
          <Text color="white" fontFamily="albert-bold" fontSize={16}>Log In </Text>
        </Pressable>

        <Pressable  borderWidth={1} style={styles.signUpButton} alignItems="center" onPress={() => navigation.push("SignUpOne")}>
          <Text color={COLORS.greenPrimary} fontFamily="albert-bold" fontSize={16}>Sign Up </Text>
        </Pressable>

        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isErrorOpen}>
          <AlertDialog.Content>
            <AlertDialog.Header>Error</AlertDialog.Header>
            <AlertDialog.Body>
              {errorMsg}
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button backgroundColor={COLORS.primaryOrange} onPress={onCloseError}>
                Try Again
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>

      </Flex>
    );
}

export default Login;
