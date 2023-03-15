import React from 'react';
import { Text, View, Button, Box} from 'native-base';
import { COLORS } from '../common/constants';
import { useNavigation } from '@react-navigation/native';
import LeafIcon from '../assets/images/leafIcon.svg'




function ActionsCongrats({route}) {
  const {totalPoints, totalUserPoints} = route.params
  const navigation = useNavigation()

  const goTo = (route) => {
    navigation.navigate(route)
  }
  
  return (
    <View style={styles.container as any}>
      <Text style={styles.bigCongratsText as any}>Big CONGRATS!</Text>
      <Text style={styles.justWonText as any}>You've just won</Text>
      <Box style={styles.pointsBox as any}>
          <Text style={styles.pointsBoxContent as any}>
              + {totalPoints}
          </Text>
          <Text style={styles.pointsBoxContent as any}>
              pts
          </Text>
      </Box>
      <Text style={styles.hopeText as any}>
          We hope it helped you making better decisions in your daily life!
      </Text>
      <Box>
        <Text style={styles.totalPointsText as any}>Now you have</Text>
        <Box style={styles.totalPointsBox as any}>
          <LeafIcon />
          <Text style={styles.totalPointsContent as any}>{totalUserPoints}</Text>
        </Box>
        <Text style={styles.pointsText as any}>Points</Text>
      </Box>
      <Button  alignItems="center"  backgroundColor={COLORS.primary} width="40%" onPress={() => goTo('ActionsMain')}>
              <Text color="white" bold>Submit</Text>
      </Button>
    </View>
  );
}

const styles = {
  container: {
    alignItems: 'center',
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    marginTop: 100
  },
  bigCongratsText:{
    height: 40,
    width: 250,
    fontSize: 30,
    textAlign: 'center',
    padding: 16,
    marginBottom: 16,
    marginTop: 20
  },
  justWonText: {
    fontSize: 20,
    marginBottom: 16
  },
  pointsBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 100,
    height: 100,  
    borderRadius: 12,
    marginRight: 12,
    marginBottom: 16,
  },
  pointsBoxContent: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 10,
  },
  hopeText: {
    textAlign: 'center',
    width: '65%',
    fontSize: 16,
    marginBottom: 16,
  },
  totalPointsText:{
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 16
  },
  totalPointsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPointsContent: {
    fontSize: 30,
    padding: 10,
    paddingTop: 25,
    fontWeight: 'bold'
  },
  pointsText:{
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 16,

  }
}

export default ActionsCongrats;
