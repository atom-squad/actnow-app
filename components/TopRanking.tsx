import React from 'react';
import { Box, Flex, HStack, Image, Text, VStack } from "native-base";
import FirstPlace from '../assets/images/firstPlace.svg';
import SecondPlace from '../assets/images/secondPlace.svg';
import ThirdPlace from '../assets/images/thirdPlace.svg';

const TopRanking = ({ rankingList }) => {

    const leafGreen = require('../assets/images/leafGreen.png');
    
    return (
        <Flex direction="row" justify="center">
          <Box paddingTop={20}>
            <VStack alignItems="center">
              <Text bold>#2</Text>
              <Text>{rankingList[1].name}</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>{rankingList[1].monthPoints? rankingList[1].monthPoints: rankingList[1].totalPoints? rankingList[1].totalPoints : 0}</Text>
              </HStack>
            </VStack>
            <SecondPlace width={100} height={100} />
          </Box>
          <Box paddingX={3}>
            <VStack alignItems="center">
              <Text bold>#1</Text>
              <Text>{rankingList[0].name}</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>{rankingList[0].monthPoints? rankingList[0].monthPoints: rankingList[0].totalPoints? rankingList[0].totalPoints : 0}</Text>
              </HStack>
            </VStack>
            <FirstPlace width={100} height={100} />
          </Box> 
          <Box paddingTop={20}>
            <VStack alignItems="center">
              <Text bold>#3</Text>
              <Text>{rankingList[2].name}</Text>
              <HStack alignItems="center">
                <Image source={leafGreen} alt="leaf icon" size={5} resizeMode="contain" />
                <Text bold>{rankingList[2].monthPoints? rankingList[2].monthPoints: rankingList[2].totalPoints? rankingList[2].totalPoints : 0}</Text>
              </HStack>
            </VStack>
            <ThirdPlace width={100} height={100} />
          </Box>     
        </Flex>
    );
}

export default TopRanking;