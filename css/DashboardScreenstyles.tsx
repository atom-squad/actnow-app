import { StyleSheet } from 'react-native';
import { COLORS } from "../common/constants";

export default StyleSheet.create ({

    button: {
        backgroundColor: COLORS.primaryOrange,
        borderRadius: 12,
        alignSelf: "flex-start",
        paddingVertical: 4
    },

    quizButton: {
        backgroundColor: COLORS.primaryOrange,
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    
    viewButton: {
        backgroundColor: "white",
        padding:16,
        borderRadius: 10,
    },
    
    progressButton: {
        flexGrow:2
    },
  
    image: {
        resizeMode: "contain",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 40,
    },
  
    bgImage: {
        resizeMode: "contain",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    }
  
})