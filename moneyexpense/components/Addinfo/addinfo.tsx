import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import piggy from '/home/gayatri/Downloads/piggy.png';
// import reminder from '../../assets/reminder.png';

function Addinfo() {
  return (
    <View>
      <Text style={styles.addInfo}>Additional informations</Text>
      <View style={styles.info}>
        <TouchableOpacity style={styles.btninfo}>
          <View style={styles.roundedbox}>
            <Image source={require('../../assets/piggy.png')} />
            <Text style={styles.savtext}>Savings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btninfo}>
          <View style={styles.roundedbox}>
            <Image source={require('../../assets/reminder.png')} />
            <Text style={styles.savtext}>Reminders</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addInfo: {
    fontFamily: 'Varela-Regular',
    fontSize: 18,
    color: '#000',
  },
  info: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btninfo: {
    width: 160,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  savtext: {
    color: '#005257',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Varela-Regular',
  },
});
export default Addinfo;
