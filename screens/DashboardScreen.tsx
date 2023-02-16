import React from "react";
import { Text, Box } from 'native-base';
import { RootTabScreenProps } from '../types';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
  return (
      <Box {...styles.container}>
          <Text>Dashboard</Text>
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
