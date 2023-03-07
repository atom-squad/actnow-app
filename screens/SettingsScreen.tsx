import React from 'react';
import { Text, View } from 'native-base';
import { RootTabScreenProps } from '../types';

export default function SettingsScreen({ navigation }: RootTabScreenProps<'Settings'>) {
  return (
    <View {...styles.container}>
        <Text>Settings</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};