import React, { useState } from "react";
import { Flex, Image, Pressable, FormControl, Input, Text, Icon, Circle, IconButton, Alert, AlertDialog, Button } from "native-base";
import styles from '../css/SignUpTwoScreenStyles';
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { API, COLORS } from "../common/constants";
import server from "../common/server";
import { useAppDispatch } from "../stores/hooks";

const SignUpTwoScreen = ({navigation, route}) => {
    const {department, email, password} = route.params;
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const dispatch = useAppDispatch();
    const cancelRef = React.useRef(null);
    const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
    const [isErrorOpen, setIsErrorOpen] = React.useState(false);
    const [errors, setErrors] = useState({});

    const logoLeaves = require('../assets/images/logoLeaves.png');

    const signup = async () => {
        if (email && password && department && firstName && lastName) {
            setErrors({});
            const resp = await server.post(API.signup, {
                name: `${firstName} ${lastName}`,
                department,
                email,
                password
            }, { dispatch });

            if(resp.status === 201){
                setIsConfirmOpen(true);
            }else{
                setIsErrorOpen(true);
            }
          
        }else{
            if(firstName == undefined || firstName == ''){
              setErrors({
                firstName: 'First name not valid'
              })
            }else if(lastName == undefined || lastName == ''){
              setErrors({
                lastName: 'Last name not valid'
              })
            }
          
        }
      }

      const onClose = () => {
        setIsConfirmOpen(false);
        navigation.push("LogIn");
      }

      const onCloseError = () => {
        setIsErrorOpen(false);
        navigation.push("SignUpOne");
      }

    return (
        <Flex direction="column"  align="center" height="100%"marginX="4">

            <Image source={logoLeaves} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100} style={styles.imagePosition} />
            
            <FormControl marginY="2" isRequired isInvalid={'firstName' in errors}>
                <FormControl.Label _text={{ bold: true,  color: 'black', fontFamily: 'albert-semibold' }}>First Name</FormControl.Label>
                <Input placeholder="First Name" onChangeText={(value) => setFirstName(value)} size="lg" marginY="1"
                 _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}} 
                 _invalid={{borderColor:COLORS.darkOrange}}
                 />
                 <FormControl.ErrorMessage _text={{
                        fontSize: 'xs',
                        color: COLORS.darkOrange
                    }}>
                    First name required
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl marginY="2" isRequired isInvalid={'lastName' in errors}>
                <FormControl.Label _text={{ bold: true,  color: 'black', fontFamily: 'albert-semibold' }}>Last Name</FormControl.Label>
                <Input placeholder="Last Name" onChangeText={(value) => setLastName(value)} size="lg" marginY="1" 
                _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}} 
                _invalid={{borderColor:COLORS.darkOrange}}
                />
                <FormControl.ErrorMessage _text={{
                        fontSize: 'xs',
                        color: COLORS.darkOrange
                    }}>
                    Last name required
                </FormControl.ErrorMessage>
            </FormControl>

            <Pressable borderWidth={1} style={styles.button} onPress={signup}>
                <Flex direction="row" alignItems="center" justifyContent="center">
                    <Text color="white" fontFamily= 'albert-bold' fontSize={16}>Let's Start </Text>
                    <Icon as={<MaterialIcons name="arrow-forward" />} size={6} color="white" marginY="3" />
                </Flex>
            </Pressable>

            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isConfirmOpen}>
                <AlertDialog.Content>
                <AlertDialog.Header>User created</AlertDialog.Header>
                <AlertDialog.Body>
                    Your account was successfully created
                </AlertDialog.Body>
                <AlertDialog.Footer>
                    <Button backgroundColor={COLORS.greenPrimary} onPress={onClose}>
                        Done
                    </Button>
                </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isErrorOpen}>
                <AlertDialog.Content>
                <AlertDialog.Header>Error</AlertDialog.Header>
                <AlertDialog.Body>
                    Some of your data is wrong. Try again.
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

  export default SignUpTwoScreen;