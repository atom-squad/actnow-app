import React, { useEffect } from 'react';
import { Text, Flex, Box, HStack, Image, Pressable, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../common/constants';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { getUserSection } from '../stores/slices/dashboardSlice';
import dashboardStyles from '../css/DashboardScreenStyles';

export default function ActionsCongrats({ route, navigation }) {
  const { params } = route;
  const { response, points = 100 } = params;
  const leafGreen = require('../assets/images/leafGreen.png');
  const profileImage = require('../assets/images/profileImage.png');
  let { userSection } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserSection());
  }, [dispatch]);

  return (
    <Flex direction="column" align="center"  height="100%" backgroundColor={COLORS.green20} paddingX="29px" paddingTop="30%">
        <StatusBar style={'light'} />
        <Box position="absolute" top="5%" zIndex={1}>
          <Image source={profileImage} alt="User Profile pic" size={158} borderRadius={158} />
        </Box>
        <Box style={styles.container} paddingY="100px">
          <Text bold fontSize="30px">Big CONGRATS! 🥳</Text>
          <Text fontSize="20px" color={COLORS.gray4}>You just have won</Text>
          <Flex align="center" borderColor={COLORS.primaryOrange} borderWidth="1px" borderStyle="solid" borderRadius={8} color={COLORS.primaryOrange} padding="12px" marginTop="28px">
            <Text color={COLORS.primaryOrange} bold fontSize="30px">+{points}</Text>
            <Text color={COLORS.primaryOrange} bold fontSize="24px">Points</Text>
          </Flex>
          <Text textAlign="center" marginX="50px" marginTop="28px" marginBottom="40px" fontSize="16px">We hope it help you to make better decisions in your day to day life.</Text>
          <Text bold fontSize="20px">Now you have</Text>
          <HStack>
            <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
            <Text bold fontSize="30px">{userSection.monthPoints}</Text>
          </HStack>
          <Text>POINTS</Text>
          <Box>
            <Pressable style={dashboardStyles.quizButton} paddingX={3} paddingY={2} marginTop={4} borderBottomColor={COLORS.darkOrange} borderBottomWidth={3} onPress={() => navigation.navigate('Dashboard')}>
              <Text color="white" bold paddingX="8px">Submit</Text>
            </Pressable>
          </Box>

        </Box>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});