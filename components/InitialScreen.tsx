import React from "react";
import { Flex, Text, Pressable, Image,  Link } from "native-base";
import icon from '../assets/images/icon.png';
import styles from '../css/InitialScreenStyles'

const InitialScreen = ({navigation}) => {

    return (
        <Flex direction="column" align="center" height="100%" marginX="4">
            <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100}  borderRadius={100} style={styles.imagePosition} />

            <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100}  borderRadius={100} style={styles.imagePosition} />

            <Pressable onPress={() => navigation.push("LogIn")} borderWidth={1} style={styles.logInButton} alignItems="center">
                <Text color="white" bold>Log In </Text>
            </Pressable>

            <Pressable onPress={() => navigation.push("SignUpOne")}  borderWidth={1} style={styles.signUpButton} alignItems="center">
                <Text color="#15AA5A" bold>Sign Up </Text>
            </Pressable>

            <Link href="https://nativebase.io" _text={{color:"#005F2C"}}>
                Terms of Privacy
            </Link>

        </Flex>
    );
  }

  export default InitialScreen; 