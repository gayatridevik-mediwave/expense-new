/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Calendardate from '../../assets/dateyear';

function Datepicker() {
  const [selected, setSelected] = useState('');
  const [showcalendar, setShowcalendar] = useState(false);
  const handleclick = () => {
    setShowcalendar(!showcalendar);
  };
  return (
    <>
      <View style={styles.monthyear}>
        <View style={styles.monthimage}>
          <Icon name="keyboard-arrow-left" size={30} color="#fff" />
          <Text
            style={{
              color: 'white',
              fontSize: 23,
            }}>
            June 2023
          </Text>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </View>
        <View>
          <TouchableOpacity onPress={handleclick}>
            <View style={styles.calborder} />

            <Calendardate style={styles.calendar} />
          </TouchableOpacity>
        </View>
      </View>
      {showcalendar && (
        <Calendar
          style={styles.calIconstyle}
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true},
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  monthimage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  calborder: {
    borderWidth: 2,
    borderRadius: 25,
    width: 40,
    height: 40,
    borderColor: '#fff',
  },
  calendar: {
    position: 'absolute',
    width: 18,
    height: 18,
    top: 10,
    right: 12,
  },
  monthyear: {
    position: 'relative',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calIconstyle: {
    maxWidth: '90%',
    zIndex: 9,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Datepicker;
