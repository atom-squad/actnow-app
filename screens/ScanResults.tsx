import React from 'react';
import { Text, Flex } from 'native-base';

export default function ScanResults({ route, navigation }) {
  const { params } = route;
  const { response } = params;
  return (
    <Flex direction="column" align="center"  height="100%" marginX="4">
        <Text>Scan Results</Text>
        {response?.label && <Text>Label: {response.label}</Text>}
        <Text>{response?.description}</Text>
        {response?.factor && <Text>Factor: {response.factor}</Text>}

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