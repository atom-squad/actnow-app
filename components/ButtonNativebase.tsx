import React from "react";
import { Pressable, Text } from "native-base";

const ButtonNativebase = ({title, style, onPress}) => {
    return (
      <Pressable style={style} onPress={onPress}>
          <Text alignSelf="center" bold>{title}</Text>
      </Pressable>
    );
  }

  export default ButtonNativebase;