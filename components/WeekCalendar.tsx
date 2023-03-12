import React from 'react';
import { Text, View } from 'native-base';

const WeekCalendar = () => {
  // an array of 7 days starting from today
  const days = [];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    days.push({
      date: day.getDate(),
      dayOfWeek: daysOfWeek[day.getDay()],
    });
  }

  return (
    <View style={styles.week as any}>
      {days.map((day, index) => (
        <View style={styles.day as any} key={index}>
          <Text style={styles.date as any}>{day.date}</Text>
          <Text style={styles.dayOfWeek as any}>{day.dayOfWeek}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = {
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  day: {
    alignItems: 'center',
  },
  dayOfWeek: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
  },
};

export default WeekCalendar;
