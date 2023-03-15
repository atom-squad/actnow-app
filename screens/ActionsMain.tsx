import {  Flex, HStack, VStack, Text, View, Image} from 'native-base';
import React, { useEffect, useState } from 'react';
import {  TouchableOpacity} from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import WeekCalendar from '../components/WeekCalendar';



function ActionsMain()  {

    const navigation = useNavigation()


   const handlePress = (type) => {
    navigation.navigate("ActionsType", {actionType: type})
   }

  return (
    <Flex style={styles.flex as any}>
        <WeekCalendar />
        <Text style={styles.heading as any}>
            Select Category
        </Text>
        <VStack style={styles.vstack as any}>
            <HStack style={styles.hstackTop as any}>
                <View>
                    <Image
                        source={require('../assets/images/test.png')} 
                        style={{justifyContent:'center', width: 180,  height: 180  }}
                        resizeMode='contain'
                        alt='Transport Image'
                    />
                    <Text style={styles.energyTypeText as any}>Transport</Text>
                    <TouchableOpacity onPress={() => handlePress('transport')}>
                        <Text style={styles.seeMoreText as any}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/food.png')} 
                        style={{justifyContent:'center', width: 180,  height: 180}}
                        resizeMode='contain'
                        alt='Food Image'
                    />
                    <Text style={styles.energyTypeText as any}>Food</Text>
                    <TouchableOpacity onPress={() => handlePress('food')}>
                        <Text style={styles.seeMoreText as any}>See More</Text>
                    </TouchableOpacity>
                </View>
            </HStack>
            <HStack>
            <View>
                    <Image
                        source={require('../assets/images/energies.png')} 
                        style={{justifyContent:'center', width: 180, height: 180}}
                        resizeMode='contain'
                        alt='Energies Image'
                    />
                    <Text style={styles.energyTypeText as any}>Energies</Text>
                    <TouchableOpacity onPress={() => handlePress('energies')}>
                        <Text style={styles.seeMoreText as any}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/products.png')} 
                        style={{justifyContent:'center', width: 180, height: 180}}
                        resizeMode='contain'
                        alt='Products Image'
                    />
                    <Text style={styles.energyTypeText as any}>Products</Text>
                    <TouchableOpacity onPress={() => handlePress('products')}>
                        <Text style={styles.seeMoreText as any}>See More</Text>
                    </TouchableOpacity>
                </View>

            </HStack>
        </VStack>
    </Flex>
  );
}

const styles = {
    flex: {
      direction:"column", 
      height:"100%",
      backgroundColor: '#fff'
    },
    heading: {
      textAlign:'center',
      textTransform:'uppercase',
      fontWeight: 'bold',
      marginTop: 30,
    },
    vstack: {
      alignItems: 'center',
      alignSelf: 'center',
      height: '100%',
      width: '70%',
      marginX: 16,
    //   borderWidth: 1,
    //   borderColor: 'black'
    },
    hstackTop: {
      marginTop: 16,
    //   borderWidth: 1,
    //   borderColor: 'black'
    },
    energyTypeText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'semibold'

    },
    seeMoreText: {
      textAlign:'center',
      fontSize: 16,
      color: '#005F2C',
      textDecorationLine: 'underline',
      fontWeight: 'bold'
    }
  }
  


export default ActionsMain;
