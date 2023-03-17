
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Box, Text } from 'native-base';

export default function QuizzModal() {
  const [questions, setQuestions] = useState([]);

  return (
    <Box style={styles.container}>
      <Text style={styles.title}>This is the quizzz</Text>
      {/* <View style={styles.separator} lightColor="#eee" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
