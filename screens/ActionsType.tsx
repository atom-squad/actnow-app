import React, { useEffect, useState } from 'react';
import { useNavigation, Link } from '@react-navigation/native';
import {  TouchableOpacity} from 'react-native';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useAppDispatch } from '../stores/hooks';
import {Text, View,  Box, Radio, Button, Image, ScrollView } from 'native-base';


function ActionsType({route}) {
  const {actionType} = route.params
  const [results, setResults] = useState([])
  const [selectedValue, setSelectedValue] = useState('');
  const navigation = useNavigation()
  const dispatch = useAppDispatch();

  console.log(actionType)

  const getActionsByType = async (actionType) => {
    if (!actionType) return;
    const resp = await server.get(`${API.actions}/${actionType}`, {dispatch});
    setResults(resp.data)
    console.info('resp', JSON.stringify(resp.data));
  }

  const goTo = (route) => {
    navigation.navigate(route)
  }


  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };


  const postActionRequest = async () => {
      if(selectedValue) {
        const resp = await server.post(`${API.actions}/newaction`, {
          actionId: selectedValue
        }, {dispatch})
        console.log(resp)
      }

      navigation.navigate('ActionsCongrats')
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
                    maxW='210'
                />;
      case 'food':
        return <Image 
                    source={require('../assets/images/food.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    maxW='210'
                />;
      case 'energies':
        return <Image 
                    source={require('../assets/images/energies.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    maxW='210'
               />;
      case 'products':
        return <Image 
                    source={require('../assets/images/products.png')} 
                    style={{justifyContent:'center'}}
                    resizeMode='contain'
                    maxW='210'
                />;
      default:
        return null;
    }
  };


  return (
    <ScrollView>

        <Box>
            <TouchableOpacity>
                <Text>Go back</Text>
            </TouchableOpacity>
        </Box>

        <Text>{actionType}</Text>

        <View>{renderImage()}</View>      

        {results.map((action) => (
            <Box 
              key={action._id}
              style={styles.card as any}
            >
                <Box>
                    <Box>
                        {action.actionPoints}
                    </Box>
                    <Box>
                        pts
                    </Box>
                </Box>
          
                <Text>{action.actionDescription}</Text>
          
                <Radio.Group  
                    name="actions" 
                    accessibilityLabel="Pick the actions you did today" 
                    onChange={(value) => handleValueChange(value)}
                >
                    <Radio 
                        value={action._id} 
                        accessibilityLabel={action._id}
                    />
                </Radio.Group>
            </Box>
        ))}

        <Button  borderWidth={1} alignItems="center"  backgroundColor={COLORS.primary} width="100%" onPress={postActionRequest}>
              <Text color="white" bold>Submit</Text>
        </Button>
    </ScrollView>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
  }
}

export default ActionsType;
