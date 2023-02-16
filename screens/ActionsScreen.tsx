import React from 'react';
import { Text, Box } from 'native-base';
import { RootTabScreenProps } from '../types';

export default function ActionsScreen({ navigation }: RootTabScreenProps<'Actions'>) {
  return (
    <Box {...styles.container}>
          <Text>Actions</Text>
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