import React from 'react';

import { Text, Box } from 'native-base';
import { RootTabScreenProps } from '../types';

export default function LeaderboardScreen({ navigation }: RootTabScreenProps<'Leaderboard'>) {
  return (
    <Box {...styles.container}>
      <Text>Leaderboard</Text>
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
