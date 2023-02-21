import React from "react";
import { Pressable, Text } from "native-base";

const ButtonNativebase = ({title, style}) => {
    return (
        <Pressable style={style}>
            <Text alignSelf="center" bold>{title}</Text>
      </Pressable>
    );
  }

  export default ButtonNativebase;