/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Datepicker() {
  //   const [selected, setSelected] = useState('');
  return (
    <View style={styles.monthyear}>
      <View style={styles.monthimage}>
        <Icon name="keyboard-arrow-left" size={30} color="#fff" />
        <Text
          style={{color: 'white', fontFamily: 'Varela-Regular', fontSize: 23}}>
          June 2023
        </Text>
        <Icon name="keyboard-arrow-right" size={30} color="#fff" />
      </View>
      <View>
        <TouchableOpacity> 
          <View style={styles.calborder} />
          <Image
            style={styles.calendar}
            source={require('../../assets/calendar.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  monthyear: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Datepicker;