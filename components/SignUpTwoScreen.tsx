import React from "react";
import { Flex, Image, Pressable, FormControl, Input, Text, Icon, Circle, IconButton } from "native-base";
import icon from '../assets/images/icon.png';
import { StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

const SignUpTwoScreen = () => {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    return (
        <Flex direction="column"  align="center" height="100%"marginX="4">
            <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={150}  borderRadius={100} style={styles.imagePosition} />
            <Flex direction="row" alignItems="center" justifyContent="center" marginBottom="20">
                <IconButton icon={<Icon as={<MaterialIcons name="add" />} size={5}  color= "#005F2C"  />} borderRadius="50" borderWidth="1" borderColor="#005F2C" marginRight="2" padding="1" />
                <Text color="#005F2C" bold>Add a Picture</Text>
             </Flex>
            
             <FormControl marginY="2" isRequired>
                    <FormControl.Label _text={{ bold: true }}>First Name</FormControl.Label>
                        <Input placeholder="First Name" value={firstName} onChangeText={setFirstName} size="lg" marginY="1"  _focus={{borderColor: "#15AA5A", borderWidth: 1}} />
                </FormControl>

                <FormControl marginY="2" isRequired>
                    <FormControl.Label _text={{ bold: true }}>Last Name</FormControl.Label>
                        <Input placeholder="Last Name" value={lastName} onChangeText={setLastName} size="lg" marginY="1"  _focus={{borderColor: "#15AA5A", borderWidth: 1}} />
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

  const styles = {

    button: {
        borderRadius: 12,
        borderBottomWidth: 2,
         width: "95%",
        paddingTop: 4,
        paddingBottom: 4,
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

  export default SignUpTwoScreen;