import React from "react";
import { RootTabScreenProps } from '../types';
import { Box, ScrollView, Image, Flex, HStack, Text, Divider, Spacer, Progress, Heading, Pressable, VStack, Circle, Center } from "native-base";
import ButtonNativebase from '../components/ButtonNativebase';
import ActionDetails from '../components/ActionDetails';
import ButtonWithFocus from '../components/ButtonWithFocus';
import { StyleSheet } from 'react-native';
import { icon } from '../assets/images/icon.png';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
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

    <Box backgroundColor="lightgrey" marginTop={4} padding={4} borderRadius={10}>
      <Heading>Quiz</Heading>
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
      <ActionDetails  bgcolor="lightgrey" task="Repair instead of buying." />
      <ActionDetails  bgcolor="darkgrey" task="Repair instead of buying." />
      <ActionDetails  bgcolor="lightgrey" task="Repair instead of buying." />
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
      <Text fontSize="4xl" bold>2450</Text>
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
