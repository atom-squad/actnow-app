import React from 'react';
import { Text, Box } from 'native-base';

export default function ScanHistory() {
  return (
    <Box {...styles.container}>
        <Text>Scan history</Text>
    </Box>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};