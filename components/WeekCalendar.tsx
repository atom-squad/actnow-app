import { View } from 'native-base';
import React from 'react';
import CalendarStrip  from 'react-native-calendar-strip';

const WeekCalendar = () => {
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
          borderColor: '#DBE1E3'
          }}
      iconStyle={{display: 'none'}}
      calendarHeaderStyle={{display: 'none'}}
      innerStyle={{padding: 5, paddingBottom: 5}}

    />
  )
};

export default WeekCalendar