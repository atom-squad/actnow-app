import React, { useEffect, useState } from "react";
import { Input, FormControl, Flex, Text, Pressable, Image, Icon,  Link, ScrollView } from "native-base";
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import SelectDepartment from "./SelectDepartment";
import SelectOrganization from "./SelectOrganization";
import styles from '../css/SignUpOneScreenStyles';
import { API, COLORS } from "../common/constants";
import server from "../common/server";
import { useAppDispatch } from "../stores/hooks";

const SignUpOneScreen = ({navigation}) => {

    const [organization, setOrganization] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [organizationsList, setOrganizationsList] = React.useState([]);
    const dispatch = useAppDispatch();
    const [errors, setErrors] = useState({});

    const logoLeaves = require('../assets/images/logoLeaves.png');
    
    const getOrgDepartments = async () => {
      const response = await server.get(API.orgDptments, dispatch);
      if(response.status === 200){
        setOrganizationsList(response.data);
      }else{
        throw new Error(`Server responded with status code ${response.status} for getOrgDepartments`);
      }
    };

    const nextStep = () => {
      if(department == undefined || department == ''){
        setErrors({
          department: 'Department not valid'
        });
      }else if(email == undefined || email == ''){
        setErrors({
          email: 'Email not valid'
        });
      }else if(password == undefined || password == ''){
        setErrors({
          password: 'Password not valid'
        });
      }else{
        setErrors({});
        navigation.navigate('SignUpTwo', {
          department,
          email,
          password
        });
      }
    }

    useEffect(() => {
      getOrgDepartments();
    }, []);
  
    return (
      <ScrollView padding={4} >
        <Flex direction="column" align="center" height="100%">
            <Image source={logoLeaves} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100} style={styles.imagePosition} />

            <Text alignSelf="flex-start" color={COLORS.primaryOrange} fontSize={30}>Hello Human,</Text>
            <Text alignSelf="flex-start">Let's make earth a better place to live,</Text>
            <Text alignSelf="flex-start"> one action at a time.</Text>
                    
            <SelectOrganization organizationsList={organizationsList} setOrganization={setOrganization} errors={errors} />

            <SelectDepartment organization={organizationsList.length > 0 ? organizationsList[organization]: undefined} setDepartment={setDepartment} errors={errors} />
                
            <FormControl marginY="2" isRequired isInvalid={'email' in errors}>
                <FormControl.Label _text={{ bold: true,  color: 'black' }}>Email</FormControl.Label>
                <Input placeholder="Email" onChangeText={(value) => setEmail(value)} size="lg" marginY="1"  
                _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}} 
                _invalid={{borderColor:COLORS.darkOrange}}
                />
                <FormControl.ErrorMessage _text={{
                        fontSize: 'xs',
                        color: COLORS.darkOrange
                    }}>
                    Email required
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl marginY="2" isRequired isInvalid={'password' in errors}>
                <FormControl.Label _text={{ bold: true,  color: 'black' }}>Password</FormControl.Label>
                <Input placeholder="Password" 
                    size="lg"  
                    onChangeText={(value) => setPassword(value)} 
                    marginY="1"
                    _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}}
                    _invalid={{borderColor:COLORS.darkOrange}}
                    type={show ? "text" : "password"} 
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" />
                        </Pressable>} 
                    
                    />
                    <FormControl.ErrorMessage _text={{
                        fontSize: 'xs',
                        color: COLORS.darkOrange
                    }}>
                    Password required
                </FormControl.ErrorMessage>
            </FormControl>

            <Link href="https://nativebase.io" alignSelf="flex-end">
                Forgot Password? 
            </Link>

            <Pressable onPress={() => nextStep()} borderWidth={1} style={styles.button} alignItems="center" justifyContent="center">
                <Text color="white" bold>Sign Up </Text>
            </Pressable>

            <Pressable  borderWidth={1} style={styles.logInButton} alignItems="center" onPress={() => navigation.push("LogIn")}>
          <Text color={COLORS.greenPrimary} bold>Log In </Text>
        </Pressable>

        </Flex>
        </ScrollView>
    );
  }

  export default SignUpOneScreen; 