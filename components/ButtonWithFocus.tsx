import React from "react";
import { Pressable, Text } from "native-base";

const ButtonWithFocus = ({title, style}) => {
    return (
        <Pressable style={style} _hover={{ backgroundColor: "coolGray.400" }} _pressed={{ backgroundColor:"coolGray.400" }}>
            <Text alignSelf="center" bold>{title}</Text>
      </Pressable>
    );
  }

  export default ButtonWithFocus;