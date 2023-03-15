import React from 'react';
import { Box, ScrollView, Flex, VStack, Text, Image, HStack } from 'native-base';
import { RootTabScreenProps } from '../types';
import ButtonWithFocus from '../components/ButtonWithFocus';
import UsernameWithRank from '../components/UsernameWithRank';
import styles from '../css/DashboardScreenStyles';
import FirstPlace from '../assets/images/firstPlace.svg';
import SecondPlace from '../assets/images/secondPlace.svg';
import ThirdPlace from '../assets/images/thirdPlace.svg';

export default function LeaderboardScreen({ navigation }: RootTabScreenProps<'Leaderboard'>) {

  const leafGreen = require('../assets/images/leafGreen.png');

  return (
    <ScrollView padding={4}>

       <Flex direction="row">
          <ButtonWithFocus title="Personal" style={styles.progressButton} onClickAction={undefined} />
          <ButtonWithFocus title="Department" style={styles.progressButton} onClickAction={undefined} />
        </Flex>

        <Flex direction="row" justify="center">
          <Box paddingTop={20}>
            <VStack alignItems="center">
              <Text bold>#2</Text>
              <Text>Sid</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>5000</Text>
              </HStack>
            </VStack>
            <SecondPlace width={100} height={100} />
          </Box>
          <Box paddingX={3}>
            <VStack alignItems="center">
              <Text bold>#1</Text>
              <Text>Guiga</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>6000</Text>
              </HStack>
            </VStack>
            <FirstPlace width={100} height={100} />
          </Box> 
          <Box paddingTop={20}>
            <VStack alignItems="center">
              <Text bold>#3</Text>
              <Text>Mohammed</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>4000</Text>
              </HStack>
            </VStack>
            <ThirdPlace width={100} height={100} />
          </Box>     
        </Flex>

      <Box paddingY={5}>
        <UsernameWithRank  textcolor="black" rank="1" username="ABCDEF" points="1000" />
        <UsernameWithRank  textcolor="black" rank="2" username="ABSKSD" points="800" />
        <UsernameWithRank  textcolor="black" rank="3" username="ABSKSD" points="700" />
        <UsernameWithRank  textcolor="black" rank="4" username="ABSKSD" points="600" />
        <UsernameWithRank  textcolor="black" rank="5" username="ABSKSD" points="500" />
        <UsernameWithRank  textcolor="black" rank="6" username="ABSKSD" points="400" />
        <UsernameWithRank  textcolor="black" rank="7" username="ABSKSD" points="300" />
        <UsernameWithRank  textcolor="black" rank="8" username="ABSKSD" points="200" />
        <UsernameWithRank  textcolor="black" rank="9" username="ABSKSD" points="100" />
        <UsernameWithRank  textcolor="black" rank="10" username="ABSKSD" points="200" />
      </Box>

    </ScrollView>
  );
}
