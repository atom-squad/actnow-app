import React, { useEffect, useState } from 'react';
import { Text, Flex, Image, Link, Box, HStack } from 'native-base';
import { Pressable } from 'react-native';
import commonStyles from '../css/LogInStyles';
import { API, COLORS } from '../common/constants';
import SearchIcon from '../assets/images/searchIcon.svg'
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { getUserSection } from '../stores/slices/dashboardSlice';
import dashboardStyles from '../css/DashboardScreenStyles';
import server from '../common/server';

export default function ScanResults({ route, navigation }) {
  const { params } = route;
  const { response } = params;
  const image = response.uri;
  const [displayFullData, setDisplayFullData] = useState(false);
  let { userSection } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  const leafGreen = require('../assets/images/leafGreen.png');

  const showFullData = () => {
    addActionPoints();
    setDisplayFullData(true);
  }

  const addActionPoints = async () => {
    const resp = await server.post(API.points, { points: 25, origin: 'scan' }, { dispatch });
    if (resp.status === 201) {
      dispatch(getUserSection());
    }
  }

  useEffect(() => {
    if (!image) {
      addActionPoints();
      setDisplayFullData(true);
    }
  }, [image]);


  const { alignSelf, ...submitButtonStyles } = dashboardStyles.quizButton;

  if (displayFullData) {
    return (
      <Flex direction="column" align="flex-start"  height="100%" marginX="4">
        <Box marginTop="28px" width="100%" alignItems="center" justifyContent="space-between" flexDirection="row">
          <Box>
            <Text bold fontSize="24px" marginTop="12px">{response.label}</Text>
            <Text fontSize="12px" marginBottom="16px">{response.category}</Text>
          </Box>
          
          <Box borderWidth={1} borderColor={COLORS.primaryOrange} borderRadius={10} alignItems="center" justifyContent="center" paddingX="12px">
            <Text bold fontSize={30} color={COLORS.primaryOrange}>+25</Text>
            <Text bold fontSize={24} color={COLORS.primaryOrange}>Points</Text>
          </Box>
        </Box>

        <Box>
          <Text fontSize="14px" marginTop="12px">Co2e</Text>
          <Text bold fontSize="18px" marginBottom="18px">{response.factor}{response.unit}</Text>
          <Text fontSize="16px" marginBottom="16px">Info</Text>
          <Text fontSize="16px" marginBottom="16px">{response.description}</Text>
        </Box>

        <Box width="100%" alignItems="center" justifyContent="center">
          <Text bold fontSize="20px">Now you have</Text>
          <HStack>
            <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
            <Text bold fontSize="30px">{userSection.monthPoints}</Text>
          </HStack>
          <Text>POINTS</Text>
        </Box>
        
        <Box width="100%" alignItems="center" justifyContent="center" marginTop={4}>
          <Pressable borderBottomColor={COLORS.darkOrange} style={submitButtonStyles} borderBottomWidth={3} onPress={() => navigation.navigate('Dashboard')}>
            <Text color="white" bold paddingX="8px" paddingX={5} paddingY={2}>Submit</Text>
          </Pressable>
        </Box>
      </Flex>
    )
  }

  const { marginTop: mt2, marginBottom: mb2, ...secButtonStyles } = commonStyles.signUpButton

  return (
    <Flex direction="column" align="center"  height="100%" marginX="4">
      { response.error? <Text bold textAlign="center" fontSize="22px" marginTop="28px" marginBottom="16px">{response.error}</Text>
        :
        <Box>
          <Text marginTop="28px">Are you looking for </Text>
          {response?.label && <Text bold fontSize="24px" marginTop="12px" marginBottom="16px">{response.label}?</Text>}
        </Box>
      }
      <Box marginBottom="36px" width="100%" height="30%">
        <Image source={{uri: response.uri}}  alt="image" style={styles.camera} />
      </Box>

      { !response.error?
        <>
          <Pressable borderWidth={1} style={commonStyles.logInButton} marginTop={8} alignItems="center" onPress={showFullData}>
            <Text color="white" bold>Yes, learn more</Text>
          </Pressable>

          <Pressable  borderWidth={1} style={secButtonStyles} marginTop={36} marginBottom={8} alignItems="center" onPress={() => navigation.goBack()}>
            <Text color={COLORS.greenPrimary} bold>No, try again</Text>
          </Pressable>
        </>
        :
        <Pressable  borderWidth={1} style={secButtonStyles} marginTop={36} marginBottom={8} alignItems="center" onPress={() => navigation.goBack()}>
          <Text color={COLORS.greenPrimary} bold>Try another object</Text>
        </Pressable>
      }
      <Text marginTop={8}>or</Text>
      
      <Link onPress={() => navigation.navigate('ScanSearch')}><Text bold marginY={8}>Try text search<SearchIcon fill={COLORS.darkOrange} marginLeft={6} /></Text></Link>
    </Flex>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
};