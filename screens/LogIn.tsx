import  *  as React  from   'react' ;
import { StyleSheet } from 'react-native';
import { KeyboardAvoidingView, Flex, FormControl, Input, Pressable, Icon, Text, Image} from 'native-base';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import icon from '../assets/images/icon.png';

function Login() {

    const [show, setShow] = React.useState(false);

    return (
        <Flex direction="column" align="center" justify="center" height="100%">
            <Image source={icon} accessibilityLabel="Act Now Logo" alt="ActNow Logo" style={styles.iconStyleRounded} />
                <FormControl style={styles.input} isRequired>
                        <Input placeholder="Email"  size="lg"  alignSelf="center"/>
                    </FormControl>
                    <FormControl style={styles.input} isRequired>
                        <Input placeholder="Password" 
                                        size="lg"  
                                        type={show ? "text" : "password"} 
                                        InputRightElement={
                                            <Pressable onPress={() => setShow(!show)}>
                                                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" />
                                            </Pressable>} />
                    </FormControl>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                     </Pressable>
            </Flex>
    );
}

const styles = StyleSheet.create({

    input: {
        width: '85%',
        marginVertical: 10 ,
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        alignSelf: "center",
        borderWidth: 1,
        width: "75%",
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

      iconStyleRounded: {
        maxWidth: '100%',
         maxHeight: '20%',
        width: '50%',
        resizeMode: 'contain',
        borderRadius: 100
      },
});

export default Login;