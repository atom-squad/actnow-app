import React from "react";
import { Pressable, Text } from "native-base";
import { COLORS } from "../common/constants";

const ButtonWithFocus = ({title, style}) => {
    return (
      <Pressable style={style} borderBottomColor={COLORS.gray2} borderBottomWidth={1} paddingBottom={2} marginBottom={2}>
        {({
          isHovered,
          isFocused,
          isPressed
        }) => {
          return <Text 
            alignSelf="center" 
            color={isPressed ? "#15AA5A" : isHovered ? "#15AA5A" : isFocused ? "#15AA5A"  : "#A1A5AC"}  
            bold>{title}</Text>
          }}
      </Pressable>
    );
  }

  export default ButtonWithFocus;