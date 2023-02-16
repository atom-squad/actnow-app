import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import icon from '../assets/images/icon.png';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { Box, Flex, FormControl, Icon, Image, Input, KeyboardAvoidingView, Pressable, Text } from 'native-base';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';

function SignUpOneScreen({navigation}) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [organisation, setOrganisation] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [show, setShow] = React.useState(false);


    return (
        <Box safeArea>
            <KeyboardAvoidingView>
                <Flex direction="column" align="center">
                    <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" style={styles.iconStyle} />
                    <FormControl style={styles.input} isRequired>
                        <Input placeholder="Organisation" value={organisation} onChangeText={setOrganisation}  size="lg" />
                    </FormControl>
                    <FormControl style={styles.input}  isRequired>
                        <Input placeholder="Department" value={department} onChangeText={setDepartment} size="lg" />
                    </FormControl>
                    <FormControl style={styles.input} isRequired>
                        <Input placeholder="Email" value={username} onChangeText={setUsername} size="lg" />
                    </FormControl>
                    <FormControl style={styles.input} isRequired>
                        <Input placeholder="Password" 
                                        size="lg"  
                                        value={password}
                                        onChangeText={setPassword} 
                                        type={show ? "text" : "password"} 
                                        InputRightElement={
                                            <Pressable onPress={() => setShow(!show)}>
                                                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" />
                                            </Pressable>} />
                    </FormControl>
                    <Pressable style={styles.button} onPress={() => navigation.push("SignUpTwo")} >
                        <Text style={styles.buttonText}>Let's Start</Text>
                     </Pressable>
                </Flex>
            </KeyboardAvoidingView>
        </Box>

    );
}

function SignUpTwoScreen() {

    const [fullName, setFullName] = React.useState('');

    return (
        <Box safeArea>
            <KeyboardAvoidingView>
                <Flex direction="column" align="center">
                <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" style={styles.iconStyleRounded} />
                <Pressable >
                    <Text style={styles.buttonText}>Add Picture</Text>
                </Pressable>
                <FormControl style={styles.inputWithMargin}  isRequired>
                        <Input placeholder="Full Name" value={fullName} onChangeText={setFullName}  size="lg"  />
                        <Pressable style={styles.buttonMargin}>
                        <Text style={styles.buttonText}>Take Survey</Text>
                     </Pressable>
                    </FormControl>
                </Flex>
            </KeyboardAvoidingView>
        </Box>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function SignUp() {
    return (
            <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen name="SignUpOne" component={SignUpOneScreen} />
                <Stack.Screen name="SignUpTwo" component={SignUpTwoScreen} />
            </Stack.Navigator> 
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    input: {
        width: '85%',
        marginVertical: 10 ,
        alignItems: 'center'
      },

      button: {
        alignSelf: "center",
        borderWidth: 1,
        width: "70%",
       height: 40,
        padding: 4,
        margin: 16,
        justifyContent: 'center',
        borderRadius: 4
      },

      buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
      },

      iconStyle: {
        maxWidth: '100%',
         maxHeight: '20%',
        width: '50%',
        resizeMode: 'contain'
      },

      iconStyleRounded: {
        maxWidth: '100%',
         maxHeight: '20%',
        width: '50%',
        resizeMode: 'contain',
        borderRadius: 100
      },

        inputWithMargin: {
        width: '85%',
        marginTop: 40 ,
        alignItems: 'center',
      },

      buttonMargin: {
         alignSelf: "center",
        borderWidth: 1,
        width: "70%",
       height: 40,
        padding: 4,
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 60
      }

});

export default SignUp;