import React, { useEffect } from "react";
import { RootTabScreenProps } from '../types';
import { Box, ScrollView, Image, Flex, HStack, Text, Spacer, Progress, Heading, VStack, Center, IconButton, Icon, Pressable } from "native-base";
import ActionDetails from '../components/ActionDetails';
import ButtonWithFocus from '../components/ButtonWithFocus';
import { StyleSheet } from 'react-native';
import { icon } from '../assets/images/icon.png';
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { getActionsDone, getOrgActions, getProgressData, getUserSection } from "../stores/slices/dashboardSlice";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { COLORS } from "../common/constants";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {

  let {userSection, actionsLogged, progressData, orgActions} = useAppSelector((state) => state.dashboard);
  let dispatch = useAppDispatch();

  const MAX_POINT_MONTH = 500;
  const profileImage = require('../assets/images/profileImage.png');

  useEffect(() => {
    dispatch(getUserSection());
    dispatch(getProgressData());
    dispatch(getOrgActions());
    dispatch(getActionsDone());
  }, [dispatch]);

  return (
    <ScrollView padding={4} >
      <Image source={{ uri: profileImage.default.src }} alt="User Profile pic" size={50} borderRadius={100} />
      <Flex direction='row'>
        <Box>
          
        </Box>
        <Box>
          <Text color={COLORS.darkOrange}>Rank #{userSection.rankingPos}</Text>
          <Text bold>{userSection.name}</Text>
          <Text>{userSection.organization} {userSection.department}</Text>
        </Box>
      </Flex>

      <Box  marginTop={4}>
        <Flex direction='row' alignItems={"center"} >
          <Image source={icon} alt="icon" size={50} borderColor="#FF642F" borderWidth={2} marginRight={2} />
          <Box>
            <Text color={COLORS.primaryOrange}>Level 2 </Text>
            <Text bold> Amateur</Text>
          </Box>
        </Flex>
        <Progress size="lg" colorScheme="warning" value={userSection.monthPoints} min={0} max={MAX_POINT_MONTH} marginY={2} bg={COLORS.lightOrange}  _filledTrack={{
        bg: "#F89344"
      }}/>          
        <Flex direction='row' justifyContent={'space-between'} padding={1}>
          <HStack>
            <Image source={icon} alt="icon" size={5} borderColor="#15AA5A" borderWidth={2} marginRight={1} />
            <Text>0</Text>
          </HStack>
          <HStack>
            <Image source={icon} alt="icon" size={5} borderColor="#15AA5A" borderWidth={2} marginRight={1} />
            <Text>{MAX_POINT_MONTH}</Text>
          </HStack>
        </Flex>
      </Box>

    <Box backgroundColor="lightgrey" marginTop={4} padding={4} borderRadius={10}>
      <Flex direction="row" alignItems="center">
        <HStack alignItems="center">
          <Image source={icon} alt="icon" size={5} borderColor="white" borderWidth={2} marginRight={2} />
          <Heading color={COLORS.white}>Quiz</Heading>
        </HStack>
        <Spacer />
        <IconButton icon={<Icon as={<MaterialIcons name="close" />} size={9}  color= "white" />}  />
        </Flex>
      <Text color={COLORS.white}>Learn how to make better decisions in your day to day life.</Text>
      <Pressable style={styles.button}>
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Text color="white" bold>Start Quiz </Text>
          <Icon as={<MaterialIcons name="arrow-forward" />} size={5} color="white" />
        </Flex>
      </Pressable>
    </Box>

    <Box>
      <Heading marginTop={4}>Progress</Heading>
      <Text marginBottom={4}>Review your actions progress.</Text>
      <Box>
       <Flex direction="row">
          <ButtonWithFocus title="Personal" style={styles.progressButton} />
          <ButtonWithFocus title="Department" style={styles.progressButton} />
        </Flex>
        {/* Add graph here */}
      </Box>
    </Box>

    <Flex direction='row' justifyContent="space-between" alignItems="center">
      <Heading>Actions Logged</Heading>
      <Pressable>
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Text color="#15aa5a" bold>View All </Text>
          <Icon as={<MaterialIcons name="arrow-forward" />} size={5} color="#15aa5a" />
        </Flex>
      </Pressable>
    </Flex>
    <Text>Review your actions logged.</Text>
    <Box>
      {(actionsLogged.length > 0)?
      actionsLogged.map((action) => (
        <ActionDetails key={action.id} bgcolor="lightgrey" task={action.description} points={action.points} />
      ))
    : <Text>You don't have any action yet.</Text>
    }
      
      <Pressable style={styles.button}>
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Text color="white" bold>Log an action  </Text>
          <Icon as={<MaterialIcons name="arrow-forward" />} size={5} color="white" />
        </Flex>
      </Pressable>
    </Box>

    <Center padding={4}>
      <Image source={icon} alt="icon" size={50} borderRadius={100}/>
      <Text>Your organisation has taken</Text>
      <Text fontSize="4xl" bold>{orgActions.orgActions}</Text>
      <Text>Actions</Text>
    </Center>

  </ScrollView>
  );
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#f89344',
      padding: 16,
      borderRadius: 8,
      marginTop: 20,
      width: "40%"
    },
  
    viewButton: {
      backgroundColor: "white",
      padding:16,
      borderRadius: 10,
    },
  
    progressButton: {
      flexGrow:2
    }
  });
