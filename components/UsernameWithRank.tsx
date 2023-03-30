import React from "react";
import { Box, Flex, HStack, Text } from "native-base";

const UsernameWithRank = ({textcolor, rank, username, points}) => {
    return (
        <Box style={styles.container}>
          <Flex direction='row' justifyContent="space-around">
            <HStack>
              <Text color={textcolor} fontFamily="albert-extrabold" fontSize={12}>#{rank}</Text>
              <Text color={textcolor} paddingLeft={6} w={130} fontFamily="albert-regular" fontSize={14}>{username}</Text>
            </HStack>
            <Text color={textcolor} fontFamily="albert-regular" fontSize={14}>{points} pts</Text>
          </Flex>
        </Box>
    );
  }

  const styles = {
    container: {
        paddingTop: 14,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9'
    }
  }

  export default UsernameWithRank;