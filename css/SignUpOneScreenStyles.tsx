import { StyleSheet } from 'react-native';
import { COLORS } from '../common/constants';

export default StyleSheet.create ({

    button: {
        borderRadius: 12,
        borderBottomWidth: 2,
        width: "95%",
        marginTop: 50,
        backgroundColor: COLORS.greenPrimary,
        borderBottomColor: COLORS.green60,
        borderTopColor: COLORS.greenPrimary,
        borderLeftColor: COLORS.greenPrimary,
        borderRightColor: COLORS.greenPrimary,
    },

    imagePosition: {
        marginTop: 80,
        marginBottom: 20
    }

})