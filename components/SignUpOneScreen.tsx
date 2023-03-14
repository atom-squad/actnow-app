import React from "react";
import { Input, FormControl, Flex, Text, Pressable, Image, Icon,  Link } from "native-base";
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import SelectDepartment from "./SelectDepartment";
import SelectOrganization from "./SelectOrganization";
import styles from '../css/SignUpOneScreenStyles';
import { API, COLORS } from "../common/constants";
import server from "../common/server";
import { useAppDispatch } from "../stores/hooks";

const SignUpOneScreen = ({navigation}) => {

    const [username, setUsername] = React.useState('');
    const [organization, setOrganization] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow] = React.useState(false);
    const dispatch = useAppDispatch();

    const logoLeaves = require('../assets/images/logoLeaves.png');

    const signup = async () => {
        if (email && password && organization && username && department) {
          const resp = await server.post(API.signup, {
            email,
            password,
            organization,
            username,
            department
          }, { dispatch });
          
        }
        // handle response
      }
  
    return (
        <Flex direction="column" align="center" height="100%" marginX="4">
            <Image source={logoLeaves} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100}   style={styles.imagePosition} />

            <Text alignSelf="flex-start" color={COLORS.primaryOrange} fontSize={30}>Hello Human,</Text>
            <Text alignSelf="flex-start">Let's make earth a better place to live,</Text>
            <Text alignSelf="flex-start"> one action at a time.</Text>
                    
            <SelectOrganization />

            <SelectDepartment />
                
            <FormControl marginY="2" isRequired>
                <FormControl.Label _text={{ bold: true,  color: 'black' }}>Email</FormControl.Label>
                <Input placeholder="Email" value={username} onChangeText={setUsername} size="lg" marginY="1"  _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}} />
            </FormControl>

            <FormControl marginY="2" isRequired>
                <FormControl.Label _text={{ bold: true,  color: 'black' }}>Password</FormControl.Label>
                <Input placeholder="Password" 
                    size="lg"  
                    value={password}
                    onChangeText={setPassword} 
                    marginY="1"
                    _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}}
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

            <Pressable onPress={() => navigation.push("SignUpTwo")} borderWidth={1} style={styles.button} alignItems="center" justifyContent="center">
                <Text color="white" bold>Sign Up </Text>
            </Pressable>

            <Pressable  borderWidth={1} style={styles.logInButton} alignItems="center" onPress={() => navigation.push('Login')}>
          <Text color={COLORS.greenPrimary} bold>Log In </Text>
        </Pressable>

        </Flex>
    );
  }

  export default SignUpOneScreen; 