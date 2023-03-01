import React from "react";
import { Box, Flex, Text, Circle } from "native-base";

const ActionDetails = ({bgcolor, task, points}) => {
    return (
      <Box backgroundColor={bgcolor}>
        <Flex direction='row' justifyContent="space-between" alignItems="center" padding={4}>
          <Box paddingLeft={8}>
            <Text bold>{task}</Text>
            <Text bold>+{points} Points !</Text>
          </Box>
          <Circle size="40px" bgColor="blue.100"><Text bold>&#x2713;</Text></Circle>
        </Flex>
      </Box>
    );
  }

  export default ActionDetails;