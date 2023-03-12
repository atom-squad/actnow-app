import React from 'react';
import { Text, View, Button, Box} from 'native-base';
import { COLORS } from '../common/constants';
import { useNavigation } from '@react-navigation/native';




function ActionsCongrats() {
  const navigation = useNavigation()

  const goTo = (route) => {
    navigation.navigate(route)
  }
  


  return (
    <View>
      <Text>Big CONGRATS!</Text>
      <Text>You've just won</Text>
      <Box borderWidth='1' borderColor='black' width='15%'>
          <Box>
              25
          </Box>
          <Box>
              pts
          </Box>
      </Box>
      <Text>We hope it helped you making better decisions in your daily life!</Text>
      <Button  borderWidth={1} alignItems="center"  backgroundColor={COLORS.primary} width="100%" onPress={() => goTo('ActionsMain')}>
              <Text color="white" bold>Submit</Text>
      </Button>
    </View>
  );
}

export default ActionsCongrats;
