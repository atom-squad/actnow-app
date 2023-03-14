import { StyleSheet } from 'react-native';
import { COLORS } from '../common/constants';

export default StyleSheet.create ({

        imagePosition: {
            marginTop: 60
        },   

        logInButton: {
            borderRadius: 12,
            borderBottomWidth: 2,
            width: "95%",
            paddingTop: 14,
            paddingBottom: 14,
            marginTop: 50,
            backgroundColor: COLORS.greenPrimary,
            borderBottomColor: COLORS.green60,
            borderTopColor: COLORS.greenPrimary,
            borderLeftColor: COLORS.greenPrimary,
            borderRightColor: COLORS.greenPrimary,
       },
   
       signUpButton: {
             borderRadius: 12,
             borderWidth: 1,
             width: "95%",
             paddingTop: 14,
             paddingBottom: 14,
             marginTop: 40,
             marginBottom: 90,
             backgroundColor: "white",
             borderColor: COLORS.greenPrimary
       },

})