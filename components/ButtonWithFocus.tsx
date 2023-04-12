import React from "react";
import { Pressable, Text } from "native-base";
import { COLORS } from "../common/constants";

const ButtonWithFocus = ({title, style, onClickAction, selected}) => {
    return (
      <Pressable style={style} borderBottomColor={selected? COLORS.greenPrimary : COLORS.gray2} 
      borderBottomWidth={2} paddingBottom={2} marginBottom={2} 
        _pressed={{ borderBottomColor: COLORS.greenPrimary, borderBottomRadius: 2 }} 
        _focus={{borderBottomColor: COLORS.greenPrimary, borderBottomRadius: 2 }}
        onPress={() => onClickAction(title)}
      >
        {({
          isHovered,
          isFocused,
          isPressed
        }) => {
          return <Text 
            alignSelf="center" 
            fontFamily="albert-semibold" 
            fontSize={18}
            color={isPressed ? COLORS.greenPrimary : selected? COLORS.greenPrimary : isFocused ? COLORS.greenPrimary  : COLORS.gray2}  
          >{title}</Text>
          }}
      </Pressable>
    );
  }

  export default ButtonWithFocus;