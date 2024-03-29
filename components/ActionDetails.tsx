import React from "react";
import { Box, Flex, Text } from "native-base";
import { StyleSheet } from "react-native";
import { COLORS } from "../common/constants";
import { formatDate } from "../common/util";

const ActionDetails = ({task, points, date}) => {
    return (
      <Box style={styles.borderStyle}>
        <Flex direction='row' alignItems="flex-start" padding={4} width={300}>
          <Box borderWidth={1} borderColor={COLORS.darkOrange} borderRadius={12} paddingY={2} paddingX={4} marginLeft={2}>
            <Text color={COLORS.darkOrange} fontFamily="albert-semibold" fontSize={18}>+{points}</Text>
            <Text color={COLORS.darkOrange} fontFamily="albert-regular" fontSize={8}>Pts</Text>
          </Box>
          <Box paddingLeft={4}>
            <Text fontFamily="albert-semibold" fontSize={16}>{task}</Text>
            <Text color={COLORS.gray2} marginTop={2} fontFamily="albert-medium" fontSize={12}>{formatDate(date)}</Text>
          </Box>
        </Flex>
      </Box>
    );
  }

  const styles = StyleSheet.create({

    borderStyle: {
      borderWidth: 1,
      borderColor: COLORS.grayLight,
      borderTopWidth: 0
    }

  })

  export default ActionDetails;