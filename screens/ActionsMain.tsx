import {  Flex, HStack, VStack, Text, View, Image, Pressable, Box, ScrollView} from 'native-base';
import React from 'react';
import {  StyleSheet } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import WeekCalendar from '../components/WeekCalendar';
import { API, COLORS } from '../common/constants';
import StripCalendar from '../components/StripCalendar';


function ActionsMain()  {

    const navigation = useNavigation();


   const handlePress = (type) => {
    navigation.navigate("ActionsType", {actionType: type});
   };

  return (
    
    <ScrollView>
      <Flex style={styles.flex}>
          <StripCalendar />
          <Text style={styles.heading}>
              Select the Category
          </Text>
          <VStack style={styles.vstack}>
              <HStack style={styles.hstackTop}>
                  <View>
                      <Pressable onPress={() => handlePress('transport')}>
                        <Box style={styles.box}>
                            <Image
                                  source={require('../assets/images/transport-test.png')}
                                  style={{justifyContent:'center', height: 150}}
                                  resizeMode='contain'
                                  alt="Energies Image"
                            />
                        </Box>
                        <Text style={styles.energyTypeText}>Transport</Text>
                        <Text style={styles.seeMoreText}>See More</Text>
                      </Pressable>
                  </View>
                  <View>
                      <Pressable onPress={() => handlePress('food')}>
                        <Box style={styles.box}>
                            <Image
                                  source={require('../assets/images/food-test.png')}
                                  style={{justifyContent:'center', height: 150}}
                                  resizeMode='contain'
                                  alt="Energies Image"
                            />
                        </Box>
                        <Text style={styles.energyTypeText}>Food</Text>
                        <Text style={styles.seeMoreText}>See More</Text>
                      </Pressable>
                  </View>
              </HStack>
              <HStack>
                  <View>
                      <Pressable onPress={() => handlePress('energies')}>
                          <Box style={styles.box}>
                              <Image
                                    source={require('../assets/images/energy-test.png')}
                                    style={{justifyContent:'center', height: 150}}
                                    resizeMode='contain'
                                    alt="Energies Image"
                              />
                          </Box>
                          <Text style={styles.energyTypeText}>Energies</Text>
                          <Text style={styles.seeMoreText}>See More</Text>
                      </Pressable>
                  </View>
                  <View>
                      <Pressable onPress={() => handlePress('products')}>
                          <Box style={styles.box}>
                              <Image
                                    source={require('../assets/images/products-test.png')}
                                    style={{justifyContent:'center', height: 150}}
                                    resizeMode='contain'
                                    alt="Energies Image"
                              />
                          </Box>
                          <Text style={styles.energyTypeText}>Products</Text>
                          <Text style={styles.seeMoreText}>See More</Text>
                      </Pressable>
                  </View>
              </HStack>
          </VStack>
      </Flex>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    flex: {
      flexDirection:"column", 
      height:"100%",
      backgroundColor: '#fff'
    },
    heading: {
      textAlign:'center',
      textTransform:'uppercase',
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 8,
      fontSize: 15.5
    },
    vstack: {
      alignItems: 'center',
      alignSelf: 'center',
      height: '100%',
      width: '70%',
      marginLeft: 16,
      marginRight: 16
    },
    hstackTop: {
      marginTop: 16,
    },
    box: {
      height: 160,
      width: 175,
    },
    boxLeft:{
      marginRight: 32
    },
    boxTop: {

    },
    energyTypeText: {
      textAlign: 'center',
      marginBottom: 16,
      fontSize: 20,
      fontWeight: 'bold',
      color: COLORS.darkGreen
    },
    seeMoreText: {
      textAlign:'center',
      fontSize: 17,
      textDecorationLine: 'underline',
      color: COLORS.green60,
      marginBottom: 24
    }
  });
  


export default ActionsMain;
