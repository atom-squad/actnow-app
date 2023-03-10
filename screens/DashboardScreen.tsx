import React, { useEffect, useState } from "react";
import { RootTabScreenProps } from '../types';
import { Box, ScrollView, Image, Flex, HStack, Text, Spacer, Progress, Heading, Center, IconButton, Icon, Pressable } from "native-base";
import ActionDetails from '../components/ActionDetails';
import ButtonWithFocus from '../components/ButtonWithFocus';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { getActionsDone, getOrgActions, getProgressData, getUserSection } from "../stores/slices/dashboardSlice";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { COLORS } from "../common/constants";
import LeafWhite from '../assets/images/leafWhite.svg';
import styles from '../css/DashboardScreenStyles'
import LineGraph from "../components/LineChart";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {

  let {userSection, actionsLogged, progressData, orgActions} = useAppSelector((state) => state.dashboard);
  let dispatch = useAppDispatch();
  let [buttonOption, setButtonOption] = useState('Personal');

  const MAX_POINT_MONTH = 500;
  const profileImage = require('../assets/images/profileImage.png');
  const icon = require('../assets/images/icon.png');
  const badge = require('../assets/images/badge.png');
  const leafGreen = require('../assets/images/leafGreen.png');
  const quizCardBackground = require('../assets/images/quizCardBackground.png');
 const impactCardBackground = require('../assets/images/impactCardBackground.png');
 const handLeaf = require('../assets/images/handLeaf.png');

  useEffect(() => {
    dispatch(getUserSection());
    dispatch(getProgressData());
    dispatch(getOrgActions());
    dispatch(getActionsDone());
  }, [dispatch]);

  const onChangeGraphOption = (option) => {
    setButtonOption(option);
  }

  return (
    <ScrollView padding={4} >
      <Flex direction='row'>
        <Box>
        <Image source={profileImage} alt="User Profile pic" size={70} borderRadius={100} marginRight={3} />
        </Box>
        <Box>
          <Text color={COLORS.darkOrange}>Rank #{userSection.rankingPos}</Text>
          <Text bold>{userSection.name}</Text>
          <Text>{userSection.organization} {userSection.department}</Text>
        </Box>
      </Flex>

      <Box  marginTop={4}>
        <Flex direction='row' alignItems="center" >
          <ImageBackground source={badge} style={styles.image}>
            <Text color={COLORS.white} bold>{userSection.rankingPos}</Text>
          </ImageBackground>
          <Box marginLeft={3}>
            <Text color={COLORS.primaryOrange}>Level 2 </Text>
            <Text bold>Amateur</Text>
          </Box>
        </Flex>
        <Progress size="lg" colorScheme="warning" value={userSection.monthPoints} min={0} max={MAX_POINT_MONTH} marginTop={2} bg={COLORS.lightOrange}  _filledTrack={{
        bg: "#F89344"
      }}/>          
        <Flex direction='row' justifyContent={'space-between'} padding={1}>
          <HStack>
            <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
            <Text>{userSection.monthPoints}</Text>
          </HStack>
          <HStack>
            <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
            <Text>{MAX_POINT_MONTH}</Text>
          </HStack>
        </Flex>
      </Box>

    <Box marginY={8}>
     <ImageBackground source={quizCardBackground} style={styles.bgImage} borderRadius={10}>
        <Box padding={2}>
          <Flex direction="row" alignItems="center">
            <HStack alignItems="center">
              <TouchableOpacity>
                <LeafWhite fill="white" />
              </TouchableOpacity>
              <Heading color={COLORS.white} marginLeft={2}>Quiz</Heading>
            </HStack>
            <Spacer />
            <IconButton icon={<Icon as={<MaterialIcons name="close" />} size={9}  color= "white" />}  />
          </Flex>
          <Text color={COLORS.white}>Learn how to make better decisions in your day to day life.</Text>
          <Pressable style={styles.quizButton} paddingX={3} paddingY={2} marginTop={4} borderBottomColor={COLORS.darkOrange} borderBottomWidth={3}>
            <Flex direction="row" alignItems="center" justifyContent="center">
              <Text color="white" bold>Start Quiz </Text>
              <Icon as={<MaterialIcons name="arrow-forward" />} size={4} color="white" />
            </Flex>
          </Pressable>
        </Box>
      </ImageBackground>
    </Box>

    <Box>
      <Heading>Progress</Heading>
      <Text marginBottom={8}>Review your actions progress.</Text>
      <Box>
       <Flex direction="row">
          <ButtonWithFocus title="Personal" style={styles.progressButton} onClickAction={onChangeGraphOption}/>
          <ButtonWithFocus title="Department" style={styles.progressButton} onClickAction={onChangeGraphOption} />
        </Flex>
        { progressData.personalProgress.length>0?
          buttonOption=='Personal'?
          <LineGraph graphData={progressData.personalProgress} />
          : <LineGraph graphData={progressData.departmentProgress} />
        :
        <Center>Sorry, no data to show</Center>
        }
      </Box>
    </Box>

    <Flex direction='row' justifyContent="space-between" alignItems="center" marginTop={6}>
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
        <ActionDetails key={`${action.id}-${Math.random().toFixed(5)}`} bgcolor="lightgrey" task={action.description} points={action.points} />
      ))
    : <Text>You don't have any action yet.</Text>
    }
      
      <Box borderWidth={1} padding={4} marginY={2}  borderColor={COLORS.gray2} borderRadius={12} >
      <Pressable style={styles.button} borderBottomColor={COLORS.darkOrange} borderBottomWidth={2} width="100%">
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Text color="white" bold>Log an action  </Text>
          <Icon as={<MaterialIcons name="arrow-forward" />} size={5} color="white" />
        </Flex>
      </Pressable>
      </Box>
    </Box>

    <Box marginY={8}>
      <ImageBackground source={impactCardBackground} style={styles.bgImage} borderRadius={10}>
        <Flex direction="row" align="center" justify="space-beween">
          <Image source={handLeaf} alt="hand icon" size={100}  marginRight="10" resizeMode="contain"/>
          <Box>
            <Text color="white">Your organisation has taken</Text>
            <Text color="white"> has taken</Text>
            <Text fontSize="4xl" color="white" bold>{orgActions.orgActions}</Text>
            <Text color="white">Actions</Text>
          </Box>
        </Flex>
      </ImageBackground>
    </Box>

  </ScrollView>
  );
  }