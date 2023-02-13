import { RootTabScreenProps } from '../types';
import { Box, ScrollView, Image, Flex, HStack, Text, Divider, Spacer, Progress, Heading, Pressable, VStack, Circle, Center } from "native-base";
import icon from "../assets/images/icon.png";

export default function Dashboard({ navigation }: RootTabScreenProps<'Dashboard'>) {

  return (
    <ScrollView padding={4} >
      <Flex direction='row'>
        <Box>
        <Image source={icon} alt="User Profile pic" size={50} borderRadius={100} />
        </Box>
        <Box>
          <HStack space={2}>
            <Text>#55</Text>
            <Text bold>ABCDEF</Text>
          </HStack>
          <HStack space={2}>
            <Text>Department Name</Text>
            <Divider orientation='vertical'></Divider>
            <Text>Organisation Name</Text>
          </HStack>
        </Box>
      </Flex>

<Box borderColor={"#000"} borderWidth={1} borderRadius={10}  marginTop={4}>
<Flex direction='row' alignItems={"center"} >
  <Image source={icon} alt="icon" size={50} borderRadius={100} borderColor="black" borderWidth={2}/>
  <Box flexGrow={2}>
  <Progress size="xl" value={65} />
        <Divider orientation='horizontal'/>
        <Flex direction='row' justifyContent={'space-between'} padding={1}>
      <Text ><Text bold>Level IV </Text>- Amateur</Text>
      <Text>Points: <Text bold>200/500</Text></Text>
      </Flex>
      </Box>
      </Flex>
      </Box>

      <Box backgroundColor="lightgrey" marginTop={4} padding={4} borderRadius={10}>
        <Heading>Quiz</Heading>
        <Text>Take the daily quiz and try to find the correct answers.</Text>
        <Pressable bg="coolGray.100" padding={4} borderRadius={10} marginTop={4}>
          <Text alignSelf="center" bold>Let's Start</Text>
        </Pressable>
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
        <Box backgroundColor="lightgrey">
        <Flex direction='row' justifyContent="space-between" alignItems="center" padding={4}>
          <Box paddingLeft={8}>
            <Text bold>Repair instead of buying.</Text>
            <Text bold>+10 Points !</Text>
          </Box>
          <Circle size="40px" bgColor="blue.100"><Text bold>&#x2713;</Text></Circle>
          </Flex>
          </Box>
          <Box backgroundColor="darkgrey">
          <Flex direction='row' justifyContent="space-between" alignItems="center" padding={4}>
          <Box paddingLeft={8}>
            <Text bold>Repair instead of buying.</Text>
            <Text bold>+10 Points !</Text>
          </Box>
          <Circle size="40px" bgColor="blue.100"><Text bold>&#x2713;</Text></Circle>
          </Flex>
          </Box>
          <Box backgroundColor="lightgrey">
          <Flex direction='row' justifyContent="space-between" alignItems="center" padding={4}>
          <Box paddingLeft={8}>
            <Text bold>Repair instead of buying.</Text>
            <Text bold>+10 Points !</Text>
          </Box>
          <Circle size="40px" bgColor="blue.100"><Text bold>&#x2713;</Text></Circle>
          </Flex>
          </Box>
          <Pressable bg="coolGray.200" padding={4} borderRadius={10}>
          <Text alignSelf="center" bold>View All</Text>
        </Pressable>
      </Box>

      <Box>
        <Heading marginTop={4}>Progress</Heading>
        <Text marginBottom={4}>Review your actions progress.</Text>
        <Box>
        <Flex direction="row">
          <Pressable bg="coolGray.200" padding={4} borderRadius={10} flexGrow={2} _hover={{ backgroundColor: "coolGray.400" }} _pressed={{ backgroundColor:"coolGray.400" }}>
          <Text alignSelf="center" bold>Personal</Text>
        </Pressable>
        <Pressable bg="coolGray.200" padding={4} borderRadius={10} flexGrow={2} _hover={{ backgroundColor: "coolGray.400" }} _pressed={{ backgroundColor:"coolGray.400" }}>
          <Text alignSelf="center" bold>Department</Text>
        </Pressable>
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