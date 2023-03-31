import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import CalendarStrip  from 'react-native-calendar-strip';
import { API } from '../common/constants';
import server from '../common/server';
import { useAppDispatch } from '../stores/hooks';

const WeekCalendar = () => {
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

  

  return (
    <CalendarStrip
      style={{
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
      }}
      iconStyle={{display: 'none'}}
      calendarHeaderStyle={{display: 'none'}}
      innerStyle={{padding: 5, paddingBottom: 5}}

    />
  )
};

export default WeekCalendar

function isDateMarked(date: any) {
  throw new Error('Function not implemented.');
}
