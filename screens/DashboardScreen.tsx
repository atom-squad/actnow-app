import React, { useEffect } from "react";
import { RootTabScreenProps } from '../types';
import { Box, ScrollView, Image, Flex, HStack, Text, Divider, Spacer, Progress, Heading, Pressable, VStack, Circle, Center, IconButton, Icon } from "native-base";
import ButtonNativebase from '../components/ButtonNativebase';
import ActionDetails from '../components/ActionDetails';
import ButtonWithFocus from '../components/ButtonWithFocus';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { icon } from '../assets/images/icon.png';
import { CloseIcon} from '../assets/images/closeIcon.svg' ;
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { getActionsDone, getOrgActions, getProgressData, getUserSection } from "../stores/slices/dashboardSlice";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {

  let {userSection, actionsLogged, progressData, orgActions} = useAppSelector((state) => state.dashboard);
  let dispatch = useAppDispatch();

  const MAX_POINT_MONTH = 500;

  useEffect(() => {
    dispatch(getUserSection());
    dispatch(getProgressData());
    dispatch(getOrgActions());
    dispatch(getActionsDone());
  }, [dispatch]);

  return (
    <ScrollView padding={4} >
      <Flex direction='row'>
        <Box>
          <Image source={icon} alt="User Profile pic" size={50} borderRadius={100} />
        </Box>
        <Box>
          <Text>Rank #{userSection.rankingPos}</Text>
          <Text bold>{userSection.name}</Text>
          <Text>{userSection.organization} {userSection.department}</Text>
        </Box>
      </Flex>

      <Box  marginTop={4}>
        <Flex direction='row' alignItems={"center"} >
          <Image source={icon} alt="icon" size={50} borderColor="#FF642F" borderWidth={2} marginRight={2} />
          <Box>
            <Text>Level 2 </Text>
            <Text bold> Amateur</Text>
          </Box>
        </Flex>
        <Progress size="lg" colorScheme="warning" value={userSection.monthPoints} min={0} max={MAX_POINT_MONTH} marginY={2} />          
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
      <Flex direction="row">
        <HStack alignItems="center">
          <Image source={icon} alt="icon" size={5} borderColor="white" borderWidth={2} marginRight={1} />
          <Heading>Quiz</Heading>
        </HStack>
        <TouchableOpacity>
          <CloseIcon />
        </TouchableOpacity>
        </Flex>
      <Text>Take the daily quiz and try to find the correct answers.</Text>
      <ButtonNativebase style={styles.button} title="Start" />
    </Box>

    <Flex direction='row' justifyContent="space-between" alignItems="center" padding={4}>
      <VStack>
        <Heading>Actions Logged</Heading>
        <Text>Review your actions logged</Text>
      </VStack>
      <Circle size="40px" bgColor="blue.100">
        <Text bold>+</Text>
      </Circle>
    </Flex>

    <Box>
      {(actionsLogged.length > 0)?
      actionsLogged.map((action) => (
        <ActionDetails key={action.id} bgcolor="lightgrey" task={action.description} points={action.points} />
      ))
    : <Text>You don't have any action yet</Text>
    }
      
      <ButtonNativebase style={styles.viewButton} title="View All" />
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
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      marginTop: 20,
    },
  
    viewButton: {
      backgroundColor: "white",
      padding:16,
      borderRadius: 10,
    },
  
    progressButton: {
      backgroundColor: "lightgrey",
      padding:16,
      borderRadius:10,
      flexGrow:2 
    }
  });
