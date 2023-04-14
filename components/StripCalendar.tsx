import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { API, COLORS } from '../common/constants';
import server from '../common/server';
import { useAppDispatch } from '../stores/hooks';
import moment from 'moment';

const StripCalendar = () => {
  const currentDate = new Date();

  const [results, setResults] = useState([])
  const [markedDates, setMarkedDates] = useState({});
  const dispatch = useAppDispatch();

  const getUserActions = async () => {
    const resp = await server.get(`${API.actions}/user`, {dispatch});

    if(resp.status === 200){
      setResults(resp.data);
    } else {
      throw new Error(`Server responded with status code ${resp.status}`);
    };
  };

  useEffect(() => {
    getUserActions()
  }, []) // Add an empty dependency array to ensure the effect runs only once

  const txDates = results.map(item => item.txDate)
  const uniqueDates = [...new Set(txDates)];
  

  const customDatesStylesFunc = date => {
    const currentDate = moment(); // Get the current date
  
    if (date.isSame(currentDate, 'day')) { // Check if date is current date
      return {
        dateContainerStyle: {
          backgroundColor: COLORS.primaryOrange,
          height: 60,
          width: 40,
        },
      };
    }
  
    if (date.isBefore(currentDate)) { // Check if date is before current date
      return {
        dateContainerStyle: {
          backgroundColor: COLORS.greenPrimary,
          height: 34,
          width: 34,
          padding: 3
        },
        dateNumberStyle: {
          textAlign: 'center',
          fontSize: 11,
          color: 'white',
          fontWeight: 'light'
        },
        dateNameStyle: {
          color: 'white'
        },
      };
    }

    if (date.isAfter(currentDate)) { // Check if date is in the future
      return {
        dateContainerStyle: {
          backgroundColor: COLORS.grayLight,
          height: 34,
          width: 34,
          padding: 3
        },
        dateNumberStyle: {
          textAlign: 'center',
          fontSize: 11,
          color: 'black',
          fontWeight: 'light'
        },
        dateNameStyle: {
          color: 'black'
        },
      };
    }
    

    
  };
  
  
  
  console.log(uniqueDates)
  return (
    <View>
      <View style={styles.container}>
        <CalendarStrip
          style={styles.calendar}
          calendarHeaderStyle={styles.calendarHeader}
          calendarColor={'#fff'}
          dateNumberStyle={styles.dateNumber}
          dateNameStyle={styles.dateName}
          disabledDateNumberStyle={styles.disabledDateNumber}
          iconStyle={{display: 'none'}}
          customDatesStyles={customDatesStylesFunc}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    borderWidth: 0.5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 12,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: COLORS.grayLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  calendar: {
    marginTop: 16,
    height: 75,
    paddingLeft: 10, 
    paddingBottom: 15,
    paddingRight: 10, 
    width: '95%', 
    alignSelf: 'center', 
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: '#DBE1E3',
    shadowColor: '#000',

  },
  calendarHeader: {
    display: 'none'
  },
  dateNumber: {
    color: COLORS.white,
  },
  dateName: {
    color: 'white',
    fontWeight: 'bold'
  },
  disabledDateNumber: {
    color: '#999',
  },
  currentDate: {
    backgroundColor: COLORS.primaryOrange,
    borderRadius: 25,
    height: 60,
    width: 40,
    
  } 
});

export default StripCalendar;
