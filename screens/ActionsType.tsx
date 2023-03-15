import React, { useEffect, useState } from 'react';
import { useNavigation, Link } from '@react-navigation/native';
import {  TouchableOpacity} from 'react-native';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useAppDispatch } from '../stores/hooks';
import {Text, View,  Box, Radio, Button, Image, ScrollView } from 'native-base';
import BackIcon from '../assets/images/back-icon.svg'
import Checkbox from 'expo-checkbox';


function ActionsType({route}) {
  const {actionType} = route.params
  const [results, setResults] = useState([])
  const [selectedValues, setSelectedValues] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation()
  const dispatch = useAppDispatch();


  const getActionsByType = async (actionType: string) => {
    if (!actionType) return;
    const resp = await server.get(`${API.actions}/${actionType}`, {dispatch});
    setResults(resp.data)
    console.info('resp', JSON.stringify(resp.data));
  }

  const handleValueChange = (value) => {
    if (selectedValues.some((selectedValue) => selectedValue.actionId === value.actionId)) {
      setSelectedValues(selectedValues.filter((selectedValue) => selectedValue.actionId !== value.actionId));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  
  const postAllActions = async () => {
    let totalPoints = 0;
    let totalUserPoints
  
    if (selectedValues) {
      selectedValues.map( async (value, index) => {
        await postAction(value.actionId);
        totalPoints += value.actionPoints;
        totalUserPoints = await addPoints(value.actionPoints);
        console.log("points", totalUserPoints)

        if (selectedValues.length === index + 1){
          navigation.navigate("ActionsCongrats", {totalPoints, totalUserPoints})
        }

      });
    }
  };


  const postAction = async (actionId: string) => {
    const resp = await server.post(`${API.actions}/newaction`, {
      actionId: actionId,

    }, {dispatch})

  }

  const addPoints = async (actionPoints : number) => {
    const resp = await server.post(`${API.user}/points`, {
      points: actionPoints,
      origin: "actions"
    }, {dispatch})
    const userPoints = resp.data.totalPoints
    console.log(userPoints)
    return userPoints
  }

  const goTo = (route) => {
    navigation.navigate(route)
  }

  useEffect(() => {
    getActionsByType(actionType)
  }, [actionType])


  const renderImage = () => {
    switch (actionType) {
      case 'transport':
        return <Image 
                    source={require('../assets/images/test.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Transport Image"
                />;
      case 'food':
        return <Image 
                    source={require('../assets/images/food.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Food Image"
                />;
      case 'energies':
        return <Image 
                    source={require('../assets/images/energies.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Energies Image"
               />;
      case 'products':
        return <Image 
                    source={require('../assets/images/products.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    alt="Products Image"
                />;
      default:
        return null;
    }
  };


  return (
      <>
        <Box>
            <TouchableOpacity onPress={() => {goTo("ActionsMain")}}>
                <BackIcon fill={COLORS.white} />
            </TouchableOpacity>
        </Box>
        <ScrollView contentContainerStyle={styles.container as any}>

            <Text style={styles.actionTypeHeading as any}>{actionType}</Text>

            <Text style={styles.text as any}>Pick the actions you did today!</Text>

            <View style={styles.view as any}>{renderImage()}</View>      

            {results.map((action) => (
                <Box 
                  key={action._id}
                  style={styles.card as any}
                >
                    <Box style={styles.pointsBox as any}>
                        <Text style={styles.pointsBoxContent as any}> 
                            {action.actionPoints}
                        </Text>
                        <Text style={styles.pointsBoxContent as any} >
                            pts
                        </Text>
                    </Box>
              
                    <Text style={styles.actionDescription as any}>{action.actionDescription}</Text>
              
                    <Checkbox  
                        value={selectedValues.some((selectedValue) => selectedValue.actionId === action._id)}
                        onValueChange={() => handleValueChange({ actionId: action._id, actionPoints: action.actionPoints })}
                        accessibilityLabel={action._id}
                        color={isChecked ? '#4630EB' : undefined}
                        style={styles.checkbox as any}
                    >
                    </Checkbox>
                </Box>
            ))}

            <Button  borderWidth={1} alignItems="center"  backgroundColor={COLORS.primary} width="100%" onPress={postAllActions}>
                  <Text color="white" bold>Submit</Text>
            </Button>
        </ScrollView>
     </>
  );
}

const styles = {
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTypeHeading: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center'
  },
  view: {
    alignSelf: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '90%',
    justifySelf: 'center',
    borderRadius: 12,
    marginBottom: 12,
  },
  pointsBox: {
    display: 'flex', 
    borderWidth: 1,
    width: 50,
    borderRadius: 12,
    marginRight: 12
  },
  pointsBoxContent: {
    textAlign: 'center'
  },
  actionDescription: {
    width: '70%',
    alignSelf: 'center'
  },
  checkbox: {
    borderRadius: 12,
    borderWidth: 1,
    alignSelf: 'center'
  }
}

export default ActionsType;
