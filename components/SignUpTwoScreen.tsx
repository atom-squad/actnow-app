import React from "react";
import { Flex, Image, Pressable, FormControl, Input, Text, Icon, Circle, IconButton } from "native-base";
import styles from '../css/SignUpTwoScreenStyles';
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { COLORS } from "../common/constants";

const SignUpTwoScreen = () => {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const profileImage = require('../assets/images/profileImage.png');

    return (
        <Flex direction="column"  align="center" height="100%"marginX="4">

            <Image source={profileImage} accessibilityLabel="Default user image" alt="Default user image" size={150}  borderRadius={100} style={styles.imagePosition} resizeMode="cover" />

            <Flex direction="row" alignItems="center" justifyContent="center" marginBottom="20">
                <IconButton icon={<Icon as={<MaterialIcons name="add" />} size={5}  color={COLORS.green60} />} borderRadius="50" borderWidth="1" borderColor={COLORS.green60} marginRight="2" padding="1" />
                <Text color={COLORS.green60} bold>Add a Picture</Text>
            </Flex>
            
            <FormControl marginY="2" isRequired>
                <FormControl.Label _text={{ bold: true,  color: 'black' }}>First Name</FormControl.Label>
                <Input placeholder="First Name" value={firstName} onChangeText={setFirstName} size="lg" marginY="1"  _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}} />
            </FormControl>

            <FormControl marginY="2" isRequired>
                <FormControl.Label _text={{ bold: true,  color: 'black' }}>Last Name</FormControl.Label>
                <Input placeholder="Last Name" value={lastName} onChangeText={setLastName} size="lg" marginY="1"  _focus={{borderColor: COLORS.greenPrimary, borderWidth: 1, backgroundColor: "white"}} />
            </FormControl>

            <Pressable borderWidth={1} style={styles.button}>
                <Flex direction="row" alignItems="center" justifyContent="center">
                    <Text color="white" bold>Let's Start </Text>
                    <Icon as={<MaterialIcons name="arrow-forward" />} size={6}      color="white" marginY="3" />
                </Flex>
            </Pressable>
                  
        </Flex>
    );
  }

  export default SignUpTwoScreen;