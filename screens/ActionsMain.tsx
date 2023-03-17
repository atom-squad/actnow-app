import {  Flex, HStack, VStack, Text, View, Image} from 'native-base';
import React from 'react';
import {  StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import WeekCalendar from '../components/WeekCalendar';



function ActionsMain()  {

    const navigation = useNavigation();


   const handlePress = (type) => {
    navigation.navigate("ActionsType", {actionType: type});
   };

  return (
    <Flex style={styles.flex}>
        <WeekCalendar />
        <Text style={styles.heading}>
            Select Category
        </Text>
        <VStack style={styles.vstack}>
            <HStack style={styles.hstackTop}>
                <View>
                    <Image
                        source={require('../assets/images/test.png')} 
                        style={{justifyContent:'center', width: 180,  height: 180  }}
                        resizeMode='contain'
                        alt='Transport Image'
                    />
                    <Text style={styles.energyTypeText}>Transport</Text>
                    <TouchableOpacity onPress={() => handlePress('transport')}>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/food.png')} 
                        style={{justifyContent:'center', width: 180,  height: 180}}
                        resizeMode='contain'
                        alt='Food Image'
                    />
                    <Text style={styles.energyTypeText}>Food</Text>
                    <TouchableOpacity onPress={() => handlePress('food')}>
                        <Text style={styles.seeMoreText}>See More</Text>
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
                    <Text style={styles.energyTypeText}>Energies</Text>
                    <TouchableOpacity onPress={() => handlePress('energies')}>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/products.png')} 
                        style={{justifyContent:'center', width: 180, height: 180}}
                        resizeMode='contain'
                        alt='Products Image'
                    />
                    <Text style={styles.energyTypeText}>Products</Text>
                    <TouchableOpacity onPress={() => handlePress('products')}>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                </View>

            </HStack>
        </VStack>
    </Flex>
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
      marginTop: 30,
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
    energyTypeText: {
      textAlign: 'center',
      fontSize: 20,

    },
    seeMoreText: {
      textAlign:'center',
      fontSize: 16,
      color: '#005F2C',
      textDecorationLine: 'underline',
      fontWeight: 'bold'
    }
  });
  


export default ActionsMain;
