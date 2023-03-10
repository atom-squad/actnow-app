import React from "react";
import { Pressable, Text } from "native-base";

const ButtonWithFocus = ({title, style, onClickAction}) => {
    return (
        <Pressable style={style} _hover={{ backgroundColor: "white" }} _pressed={{ backgroundColor:"white" }}
        onPress={() => onClickAction(title)}
        >
            <Text alignSelf="center" bold>{title}</Text>
      </Pressable>
    );
  }

  export default ButtonWithFocus;