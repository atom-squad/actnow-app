import {  Flex, HStack, VStack, Text, View, Image} from 'native-base';
import React, { useEffect, useState } from 'react';
import {  TouchableOpacity} from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import WeekCalendar from '../components/WeekCalendar';
import server from '../common/server';
import { API } from '../common/constants';
import ActionCategory from '../components/ActionCategory';
import { useAppDispatch } from '../stores/hooks';


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
                <View style={styles.view as any}>
                    <Image
                        source={require('../assets/images/test.png')} 
                        style={{justifyContent:'center'}}
                        resizeMode='contain'
                        maxW='210'
                    />
                    <Text>Transport</Text>
                    <TouchableOpacity onPress={() => handlePress('transport')}>
                        <Text>See More</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/food.png')} 
                        style={{justifyContent:'center'}}
                        resizeMode='contain'
                        maxW='210'
                    />
                    <Text>Food</Text>
                    <TouchableOpacity onPress={() => handlePress('food')}>
                        <Text>See More</Text>
                    </TouchableOpacity>
                </View>
            </HStack>
            <HStack>
            <View>
                    <Image
                        source={require('../assets/images/energies.png')} 
                        style={{justifyContent:'center'}}
                        resizeMode='contain'
                        maxW='210'
                    />
                    <Text>Energies</Text>
                    <TouchableOpacity onPress={() => handlePress('energies')}>
                        <Text>See More</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/products.png')} 
                        style={{justifyContent:'center'}}
                        resizeMode='contain'
                        maxW='210'
                    />
                    <Text>Products</Text>
                    <TouchableOpacity onPress={() => handlePress('products')}>
                        <Text>See More</Text>
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
      marginTop: 20,
      marginBottom: 20
    },
    vstack: {
      alignItems: 'center',
      alignSelf: 'center',
      height: '100%',
      width: '90%',
      marginX: 16
    },
    hstackTop: {
      marginTop: 16
    },
    view: {
      marginTop: 16
    }
  }
  


export default ActionsMain;
