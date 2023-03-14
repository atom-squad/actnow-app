import { StyleSheet } from 'react-native';
import { COLORS } from '../common/constants';

export default StyleSheet.create ({

    button: {
        borderRadius: 12,
        borderBottomWidth: 2,
        width: "95%",
        paddingVertical: 14,
        marginTop: 50,
        backgroundColor: COLORS.greenPrimary,
        borderBottomColor: COLORS.green60,
        borderTopColor: COLORS.greenPrimary,
        borderLeftColor: COLORS.greenPrimary,
        borderRightColor: COLORS.greenPrimary,
    },

    logInButton: {
        borderRadius: 12,
         borderWidth: 1,
         width: "95%",
         paddingTop: 14,
         paddingBottom: 14,
         marginTop: 35,
         marginBottom: 90,
         backgroundColor: "white",
         borderColor: COLORS.greenPrimary
       },

    imagePosition: {
        marginTop: 80,
        marginBottom: 20
    }

})