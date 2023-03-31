import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { API, COLORS } from '../common/constants';
import server from '../common/server';
import { useAppDispatch } from '../stores/hooks';

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
  
  console.log(uniqueDates)
  return (
    <View style={styles.container}>
      <CalendarStrip
        style={styles.calendar}
        calendarHeaderStyle={styles.calendarHeader}
        calendarColor={'#fff'}
        calendarHeaderFormat={'MMMM'}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        highlightDateNumberStyle={styles.highlightDateNumber}
        highlightDateNameStyle={styles.highlightDateName}
        disabledDateNameStyle={styles.disabledDateName}
        disabledDateNumberStyle={styles.disabledDateNumber}
        iconStyle={{display: 'none'}}
        customDatesStyles={[
          {
            startDate: currentDate,
            endDate: currentDate,
            dateContainerStyle: styles.currentDate,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
  },
  calendar: {
    height: 80, 
    marginTop: 30,
    paddingTop: 10, 
    paddingBottom: 10, 
    borderWidth: 0.5, 
    width: '90%', 
    alignSelf: 'center', 
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: '#DBE1E3',
  },
  calendarHeader: {
    display: 'none'
  },
  dateNumber: {
    color: '#333',
  },
  dateName: {
    color: '#333',
  },
  highlightDateNumber: {
    color: '#fff',
  },
  highlightDateName: {
    color: '#fff',
  },
  disabledDateName: {
    color: '#999',
  },
  disabledDateNumber: {
    color: '#999',
  },
  currentDate: {
    backgroundColor: COLORS.primaryOrange,
    borderRadius: 25,
    height: 70,
  } 
});

export default StripCalendar;
