import React from "react";
import { Flex, Text, Pressable, Image,  Link } from "native-base";
import icon from '../assets/images/icon.png';
import styles from '../css/InitialScreenStyles'
import { COLORS } from "../common/constants";

const InitialScreen = ({navigation}) => {

    const logoWithName = require('../assets/images/logoWithName.png');

    return (
        <Flex direction="column" align="center" height="100%">
            <Image source={logoWithName} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={250} style={styles.imagePosition} resizeMode="contain" />

            <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={100}  borderRadius={100} style={styles.imagePosition} marginBottom={60} />

            <Pressable onPress={() => navigation.push("LogIn")} borderWidth={1} style={styles.logInButton} alignItems="center">
                <Text color="white" bold>Log In </Text>
            </Pressable>

            <Pressable onPress={() => navigation.push("SignUpOne")}  borderWidth={1} style={styles.signUpButton} alignItems="center">
                <Text color={COLORS.greenPrimary} bold>Sign Up </Text>
            </Pressable>

            <Link href="https://nativebase.io" _text={{color: COLORS.green60}}>
                Terms of Privacy
            </Link>

        </Flex>
    );
  }

  export default InitialScreen; 