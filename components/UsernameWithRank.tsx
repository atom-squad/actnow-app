import React from "react";
import { Box, Flex, Text } from "native-base";

const ActionDetails = ({bgcolor, textcolor, rank, username, points}) => {
    return (
        <Box backgroundColor={bgcolor} style={styles.container}>
        <Flex direction='row' justifyContent="space-around">
            <Text color={textcolor} bold>#{rank}</Text>
            <Text color={textcolor}>{username}</Text>
            <Text color={textcolor} bold>{points}</Text>
          </Flex>
          </Box>
    );
  }

  const styles = {
    container: {
        paddingTop: 14,
        paddingBottom: 14,
        borderWidth: 1,
        borderColor: "black",
        borderTopWidth: 0
    }
  }

  export default ActionDetails;