import React from 'react';
import { Text, Box } from 'native-base';
import { RootTabScreenProps } from '../types';

export default function SettingsScreen({ navigation }: RootTabScreenProps<'Settings'>) {
  return (
    <Box {...styles.container}>
          <Text>Settings</Text>
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