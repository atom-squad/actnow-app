import React, { useEffect } from 'react';
import { Box, ScrollView, Flex, VStack, Text, Image, HStack } from 'native-base';
import { RootTabScreenProps } from '../types';
import ButtonWithFocus from '../components/ButtonWithFocus';
import UsernameWithRank from '../components/UsernameWithRank';
import styles from '../css/DashboardScreenStyles';
import FirstPlace from '../assets/images/firstPlace.svg';
import SecondPlace from '../assets/images/secondPlace.svg';
import ThirdPlace from '../assets/images/thirdPlace.svg';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { getDepartmentsRanking, getPersonalRanking } from '../stores/slices/leaderboardSlice';

export default function LeaderboardScreen({ navigation }: RootTabScreenProps<'Leaderboard'>) {

  let {personalRanking, departmentsRank} = useAppSelector((state) => state.leaderboard);
  let dispatch = useAppDispatch();

  let pos = 4;

  const leafGreen = require('../assets/images/leafGreen.png');

  useEffect(() => {
    dispatch(getPersonalRanking());
    dispatch(getDepartmentsRanking());
  }, [dispatch]);

  return (
    <ScrollView padding={4}>

       <Flex direction="row">
          <ButtonWithFocus title="Personal" style={styles.progressButton} onClickAction={undefined} />
          <ButtonWithFocus title="Department" style={styles.progressButton} onClickAction={undefined} />
        </Flex>

        {
          personalRanking.usersRanking.length>0?
        <>
        <Flex direction="row" justify="center">
          <Box paddingTop={20}>
            <VStack alignItems="center">
              <Text bold>#2</Text>
              <Text>{personalRanking.usersRanking[1].name}</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>{personalRanking.usersRanking[1].monthPoints}</Text>
              </HStack>
            </VStack>
            <SecondPlace width={100} height={100} />
          </Box>
          <Box paddingX={3}>
            <VStack alignItems="center">
              <Text bold>#1</Text>
              <Text>{personalRanking.usersRanking[0].name}</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>{personalRanking.usersRanking[0].monthPoints}</Text>
              </HStack>
            </VStack>
            <FirstPlace width={100} height={100} />
          </Box> 
          <Box paddingTop={20}>
            <VStack alignItems="center">
              <Text bold>#3</Text>
              <Text>{personalRanking.usersRanking[2].name}</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>{personalRanking.usersRanking[2].monthPoints}</Text>
              </HStack>
            </VStack>
            <ThirdPlace width={100} height={100} />
          </Box>     
        </Flex>

        { personalRanking.usersRanking.length>3?
        <Box paddingY={5}>
          { personalRanking.usersRanking.map((userRank) => (
              <UsernameWithRank textcolor="black" rank={pos++} username={userRank.name} points={userRank.monthPoints} />
          ))
          }
        </Box>
        :
        <Box paddingY={5}>No more users</Box>
        }
        </>
      :
      <Box paddingY={5}>Sorry, no data to show</Box>
      }

    </ScrollView>
  );
}
