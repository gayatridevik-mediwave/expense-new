/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';


function Displayamt() {
  const [amount] = useState({
    income: '15,000',
    expense: '10,000',
    total: '5,000',
  });
  return (
    <View>
      <View style={styles.parentdiv}>
        <View style={styles.childdiv}>
          <Text style={styles.income}>Income</Text>
          <Text style={styles.amtincome}>₹ {amount.income}</Text>
        </View>
        <View style={styles.subchild} />
        <View style={styles.childdiv}>
          <Text style={styles.income}>Expenses</Text>
          <Text style={styles.amtexpense}>₹ {amount.expense}</Text>
        </View>
        <View style={styles.linedesign} />
        <View style={styles.childdiv}>
          <Text style={styles.income}>Total</Text>
          <Text style={styles.amttotal}>₹ {amount.total}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentdiv: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 4,
    padding: 10,
    zIndex: 0,
  },
  childdiv: {justifyContent: 'center', alignItems: 'center'},
  income: {fontSize: 18, color: '#000'},
  amtincome: {
    fontSize: 14,
    color: '#005257',
    marginTop: 3,
  },
  subchild: {
    height: 60,
    width: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  amtexpense: {
    fontSize: 14,
    color: '#B91D1D',
    marginTop: 3,
  },
  linedesign: {
    height: 60,
    width: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  amttotal: {
    fontSize: 14,
    color: '#4D4D4D',
    marginTop: 3,
  },
});

export default Displayamt;
