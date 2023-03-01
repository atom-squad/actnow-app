import React from "react";
import { Input, FormControl, Flex, Text, Pressable, Image, Icon,  Link } from "native-base";
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import icon from '../assets/images/icon.png';
import SelectDepartment from "./SelectDepartment";
import SelectOrganization from "./SelectOrganization";

const SignUpOneScreen = ({navigation}) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(false);

    return (
        <Flex direction="column" align="center" height="100%" marginX="4">
            <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100}  borderRadius={100} style={styles.imagePosition} />
                    
            <SelectOrganization />

            <SelectDepartment />
                
            <FormControl marginY="2" isRequired>
                <FormControl.Label _text={{ bold: true }}>Email</FormControl.Label>
                <Input placeholder="Email" value={username} onChangeText={setUsername} size="lg" marginY="1"  _focus={{borderColor: "#15AA5A", borderWidth: 1}} />
            </FormControl>

            <FormControl marginY="2" isRequired>
                <FormControl.Label _text={{ bold: true }}>Password</FormControl.Label>
                <Input placeholder="Password" 
                    size="lg"  
                    value={password}
                    onChangeText={setPassword} 
                    marginY="1"
                    _focus={{borderColor: "#15AA5A", borderWidth: 1}}
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

            <Pressable onPress={() => navigation.push("SignUpTwo")} borderWidth={1} style={styles.button}>
                <Flex direction="row" alignItems="center" justifyContent="center">
                    <Text color="white" bold>Sign Up </Text>
                    <Icon as={<MaterialIcons name="arrow-forward" />} size={5}      color="white" marginY="3" />
                </Flex>
            </Pressable>

        </Flex>
    );
  }

  const styles = {

        button: {
            borderRadius: 12,
            borderBottomWidth: 2,
            width: "95%",
            marginTop: 50,
            backgroundColor: "#15AA5A",
            borderBottomColor: "#005F2C",
            borderTopColor: "#15AA5A",
            borderLeftColor: "#15AA5A",
            borderRightColor: "#15AA5A",
        },

        imagePosition: {
            marginTop: 80,
            marginBottom: 20
        }

  }

  export default SignUpOneScreen; 