import React from "react";
import { Pressable, Text } from "native-base";

const ButtonWithFocus = ({title, style}) => {
    return (
      <Pressable style={style}>
        {({
          isHovered,
          isFocused,
          isPressed
        }) => {
          return <Text 
            alignSelf="center" 
            color={isPressed ? "#15AA5A" : isHovered ? "#15AA5A" : isFocused ? "#15AA5A"  : "#A1A5AC"} 
            borderBottomColor={isPressed ? "#15AA5A" : isHovered ? "#15AA5A" : isFocused ? "#15AA5A"  : "#ffffff"} 
            bold>{title}</Text>
          }}
      </Pressable>
    );
  }

  export default ButtonWithFocus;