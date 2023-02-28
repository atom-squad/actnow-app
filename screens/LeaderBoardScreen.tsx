import React from 'react';
import { Text, Box, ScrollView, Image, Flex, HStack, Divider, Spacer, Center, Progress, Heading } from 'native-base';
import { RootTabScreenProps } from '../types';
import { icon } from '../assets/images/icon.png';
import ButtonWithFocus from '../components/ButtonWithFocus';
import UsernameWithRank from '../components/UsernameWithRank';

export default function LeaderboardScreen({ navigation }: RootTabScreenProps<'Leaderboard'>) {
  return (
    <ScrollView padding={4} >
      <Flex direction='row'>
        <Box>
          <Image source={icon} alt="User Profile pic" size={50} borderRadius={100} />
        </Box>
        <Box>
          <Text>Hello,</Text>
          <Text bold>ABCDEF username</Text>
          <HStack space={2}>
            <Text>Department</Text>
            <Divider orientation='vertical'></Divider>
            <Text>Organisation</Text>
          </HStack>
        </Box>
        <Spacer/>
        <Box borderColor="black" borderWidth="2" paddingX="4" paddingY="1" borderRadius="8">
          <Center>
            <Text>Rank</Text>
            <Text  fontSize="4xl" bold>42</Text>
          </Center>
        </Box>
      </Flex>

      <Box  marginTop={4}>
        <Flex direction='row' alignItems={"center"} >
          {/* <Image source={icon} alt="icon" size={50} borderRadius={100} borderColor="black" borderWidth={2}/> */}
          <Box flexGrow={2}>
          <Text>Level IV </Text>
          <Text bold> Amateur</Text>
            <Progress size="sm" value={65} />
            <Divider orientation='horizontal'/>
            <Flex direction='row' justifyContent={'space-between'} padding={1}>
              <Text>200</Text>
              <Text>500</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box>
      <Heading marginTop={4}>Leaderboard</Heading>
      <Box>
       <Flex direction="row">
          <ButtonWithFocus title="Personal" style={styles.progressButton} />
          <ButtonWithFocus title="Department" style={styles.progressButton} />
        </Flex>
        {/* Add graph here */}
      </Box>

      <Box paddingTop="5">
        <Flex direction="row" justify="space-around" paddingBottom="3" borderBottomColor="black" borderBottomWidth="1">
          <Text >Rank</Text>
          <Text>Username</Text>
          <Text>Points</Text>
        </Flex>
        <UsernameWithRank bgcolor="lightgrey" textcolor="black" rank="1" username="ABCDEF" points="1000" />
        <UsernameWithRank bgcolor="darkgrey" textcolor="black" rank="2" username="ABSKSD" points="800" />
        <UsernameWithRank bgcolor="lightgrey" textcolor="black" rank="3" username="ABSKSD" points="700" />
        <UsernameWithRank bgcolor="darkgrey" textcolor="black" rank="4" username="ABSKSD" points="600" />
        <UsernameWithRank bgcolor="lightgrey" textcolor="black" rank="5" username="ABSKSD" points="500" />
        <UsernameWithRank bgcolor="darkgrey" textcolor="black" rank="6" username="ABSKSD" points="400" />
        <UsernameWithRank bgcolor="lightgrey" textcolor="black" rank="7" username="ABSKSD" points="300" />
        <UsernameWithRank bgcolor="black" textcolor="white" rank="8" username="ABSKSD" points="200" />
      </Box>

    </Box>
    </ScrollView>
  );
}

const styles = {
  progressButton: {
    backgroundColor: "lightgrey",
    padding:16,
    borderRadius:10,
    flexGrow:2 
  }
};
