import React from "react";
import { Flex, Text, Pressable, Image,  Link } from "native-base";
import icon from '../assets/images/icon.png';
import styles from '../css/InitialScreenStyles'
import { COLORS } from "../common/constants";
import OneLiner from '../assets/images/oneLiner.svg';

const InitialScreen = ({navigation}) => {

    const logoWithName = require('../assets/images/logoWithName.png');

    return (
        <Flex direction="column" align="center" height="100%">
            <Image source={logoWithName} accessibilityLabel="Act Now Logo" alt="ActNow Logo" size={250} style={styles.imagePosition} resizeMode="contain" />

            <OneLiner width={250} height={150} style={styles.quotePosition} />

            <Pressable onPress={() => navigation.push("LogIn")} borderWidth={1} style={styles.logInButton} alignItems="center">
                <Text color="white" fontFamily="albert-bold" fontSize={16}>Log In </Text>
            </Pressable>

            <Pressable onPress={() => navigation.push("SignUpOne")}  borderWidth={1} style={styles.signUpButton} alignItems="center">
                <Text color={COLORS.greenPrimary} fontFamily="albert-bold" fontSize={16}>Sign Up </Text>
            </Pressable>

        </Flex>
    );
  }

  export default InitialScreen; 