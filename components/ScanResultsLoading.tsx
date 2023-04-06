import React from 'react';
import { Text, Flex, Image } from 'native-base';
import { COLORS } from '../common/constants';

export default function ScanResultsLoading() {

  const leafGreen = require('../assets/images/leafGreen.png');
  return (
    <Flex direction="column" align="center" justifyContent="center" height="100%" backgroundColor={COLORS.green40}>
        <Image source={leafGreen} alt="leaf icon" size={12} resizeMode="contain" />
        <Text bold fontSize="20px" marginTop="16px">Result Loading</Text>

    </Flex>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};