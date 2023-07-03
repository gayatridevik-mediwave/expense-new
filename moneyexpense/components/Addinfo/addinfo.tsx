/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


function Addinfo() {
  return (
    <View style={{marginTop: 40, marginBottom: 50}}>
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
    maxWidth: '100%',
    marginTop: 10,
    // marginLeft: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btninfo: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 160,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
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
