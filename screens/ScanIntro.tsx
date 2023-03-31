import React from 'react';
import { Text, Flex, Button, Box, Pressable } from 'native-base';
import { COLORS } from '../common/constants';
import { StyleSheet } from 'react-native';
import { useAppDispatch } from '../stores/hooks';
import { useNavigation } from '@react-navigation/native';
import { dismissScanIntro } from '../stores/slices/userSlice';
import ScanIllustration from '../assets/images/scanIllustration.svg'
import LeavesBg from '../assets/images/leavesBackground.svg'
import commonStyles from '../css/LogInStyles';

export default function ScanIntro() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const dismissIntro = () => {
    dispatch(dismissScanIntro())
  }

  return (
    <Flex direction="column" align="center"  height="100%" marginX="4">
        <Box marginTop="60px">

          <ScanIllustration/>
        </Box>
        <LeavesBg position="absolute"/>
        <Text color={COLORS.green60} bold fontSize="30px" marginTop="24px">Smart Scan</Text>
        <Box marginY="24px" width="80%">
          <Text bold textAlign="center">Here you can scan daily-use items to find out their carbon emission.</Text>
          <Text bold marginTop="16px" textAlign="center">You can make better decisions to save the planet!</Text>
        </Box>
        <Pressable borderWidth={1} style={commonStyles.logInButton} marginTop="px" alignItems="center" onPress={() => dismissIntro()}>
          <Text color="white" bold>Let's Scan</Text>
        </Pressable>

        <Pressable  borderWidth={1} style={commonStyles.signUpButton} marginBottom="36px" alignItems="center" onPress={() => dismissIntro()}>
          <Text color={COLORS.primary} bold>Do not show it again</Text>
        </Pressable>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dismissButton: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderStyle: 'solid',
  }
});