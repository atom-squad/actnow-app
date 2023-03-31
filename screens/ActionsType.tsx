import React, { useEffect, useState } from 'react';
import { useNavigation, Link } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity} from 'react-native';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useAppDispatch } from '../stores/hooks';
import {Text, View,  Box, Radio, Button, Image, ScrollView, Pressable} from 'native-base';
import BackIcon from '../assets/images/back-icon.svg';
import Checkbox from 'expo-checkbox';
import dashboardStyles from '../css/DashboardScreenStyles';


function ActionsType({route}) {
  const {actionType} = route.params;
  const [results, setResults] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();


  const getActionsByType = async (actionType: string) => {
    if (!actionType) return;
    const resp = await server.get(`${API.actions}/${actionType}`, {dispatch});

    if(resp.status === 200){
      setResults(resp.data);
    } else {
      throw new Error(`Server responded with status code ${resp.status}`);
    };
  };

  const handleValueChange = (value) => {
    if (selectedValues.some((selectedValue) => selectedValue.actionId === value.actionId)) {
      setSelectedValues(selectedValues.filter((selectedValue) => selectedValue.actionId !== value.actionId));
    } else {
      setSelectedValues([...selectedValues, value]);
    };
  };
  
  const postAllActions = async () => {
    let points = 0;
    let totalUserPoints;
  
    if (selectedValues) {
      selectedValues.map( async (value, index) => {
        await postAction(value.actionId);
        points += value.actionPoints;
        totalUserPoints = await addPoints(value.actionPoints);

        if (selectedValues.length === index + 1 && totalUserPoints){
          navigation.navigate('CompletionModal',  { points });
        };

      });
    };
  };


  const postAction = async (actionId: string) => {
    const resp = await server.post(`${API.actions}/newaction`, {
      actionId: actionId,
    }, {dispatch});
  };

  const addPoints = async (actionPoints : number) => {
    const resp = await server.post(`${API.user}/points`, {
      points: actionPoints,
      origin: "actions"
    }, {dispatch});
    if(resp.status === 201){
      const userPoints = resp.data.totalPoints;
      return userPoints;
    } else {
      throw new Error(`Server responded with status code ${resp.status}`);
    };
  };

  const goTo = (route) => {
    navigation.navigate(route);
  }

  useEffect(() => {
    getActionsByType(actionType);
  }, [actionType]);


  const renderImage = () => {
    switch (actionType) {
      case 'transport':
        return <Image 
                    source={require('../assets/images/transport-test.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Transport Image"
                />;
      case 'food':
        return <Image 
                    source={require('../assets/images/food-test.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Food Image"
                />;
      case 'energies':
        return <Image 
                    source={require('../assets/images/energy-test.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Energies Image"
               />;
      case 'products':
        return <Image 
                    source={require('../assets/images/products-test.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Products Image"
                />;
      default:
        return null;
    };
  };


  return (
      <>
        <Box style={styles.boxHeading}>
            <Pressable onPress={() => {goTo("ActionsMain")}} style={styles.icon}>
                <BackIcon fill={COLORS.white} />
            </Pressable>
            <Text style={styles.actionTypeHeading}>{actionType}</Text>
        </Box>
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.text}>Pick the actions you did today!</Text>

            <View style={styles.view}>{renderImage()}</View>      

            {results.map((action) => (
              <TouchableOpacity // use TouchableOpacity instead of Box
              key={action._id}
              style={styles.card}
              onPress={() =>
                handleValueChange({
                  actionId: action._id,
                  actionPoints: action.actionPoints,
                })
              }
            >
              <Box style={styles.pointsBox}>
                <Text style={styles.pointsNumber}>+ {action.actionPoints}</Text>
                <Text style={styles.pointsText}>pts</Text>
              </Box>
              <Text style={styles.actionDescription}>{action.actionDescription}</Text>
              <Box
                borderColor={COLORS.primaryOrange}
                // bg={selectedValues.some(
                //   (selectedValue) => selectedValue.actionId === action._id
                // ) ? COLORS.primaryOrange : 'white' }
                borderWidth={1}
                borderRadius={12}
                width={6}
                height={6}
                alignItems="center"
                justifyContent="center"
                marginRight={3}
              >
                <Box
                  borderColor='red'
                  bg={selectedValues.some(
                    (selectedValue) => selectedValue.actionId === action._id
                  ) ?  COLORS.primaryOrange : 'white' }
                  borderRadius={12}
                  width={3.5}
                  height={3.5}
                  display={ 
                    selectedValues.some(
                      (selectedValue) => selectedValue.actionId === action._id
                    )
                      ? 'flex'
                      : 'none'
                  }
                />
              </Box>
            </TouchableOpacity>

            ))}

          <Box>
            <Pressable style={styles.button} paddingX={3} paddingY={2} marginTop={4} borderBottomColor={COLORS.greenPrimary} borderBottomWidth={3} width={350} onPress={postAllActions}>
              <Text color="white" bold paddingX="8px" textAlign="center">Submit</Text>
            </Pressable>
          </Box>
        </ScrollView>
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxHeading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  icon: {

  },
  actionTypeHeading: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 140,
  },
  
  text: {
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 16,
    fontSize: 16
  },
  view: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 0.3,
    backgroundColor: COLORS.white,
    padding: 10,
    width: '90%',
    height: 90,
    justifySelf: 'center',
    borderRadius: 12,
    marginBottom: 16,
  },
  pointsBox: {
    display: 'flex', 
    borderWidth: 2,
    borderColor: COLORS.lightOrange,
    width: 60,
    height: 55,
    borderRadius: 12,
    marginRight: 12
  },
  pointsNumber: {
    textAlign: 'center',
    fontSize: 16.5,
    fontWeight: 'bold',
    marginTop: 5
  },
  pointsText: {
    textAlign: 'center',
    fontSize: 15,
  },
  pointsBoxContent: {
    textAlign: 'center'
  },
  actionDescription: {
    width: '70%',
    alignSelf: 'center',
    fontSize: 15,
  },
  checkbox: {
    borderRadius: 12,
    borderWidth: 1,
    alignSelf: 'center',
    color: 'red'
  },
  button:{
    backgroundColor: COLORS.greenPrimary,
    borderRadius: 12,
    paddingVertical: 4,
    marginBottom: 16
  }
});

export default ActionsType;
