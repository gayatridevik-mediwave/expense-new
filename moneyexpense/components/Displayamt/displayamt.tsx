/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View} from 'react-native';

// const income = '2000';

function Displayamt() {
  const [amount] = useState({
    income: '15,000',
    expense: '10,000',
    total: '5,000',
  });
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          maxWidth: '100%',
          marginTop: 20,
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          elevation: 4,
          padding:10,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#000'}}>Income</Text>
          <Text
            style={{
              fontSize: 14,
              color: '#005257',
              marginTop: 3,
            }}>
            ₹ {amount.income}
          </Text>
        </View>
        <View
          style={{
            height: 60,
            width: 1,
            backgroundColor: 'grey',
            alignItems: 'center',
          }}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#000'}}>Expenses</Text>
          <Text
            style={{
              fontSize: 14,
              color: '#B91D1D',
              marginTop: 3,
            }}>
            ₹ {amount.expense}
          </Text>
        </View>
        <View
          style={{
            height: 60,
            width: 1,
            backgroundColor: 'grey',
            alignItems: 'center',
          }}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#000'}}>Total</Text>
          <Text
            style={{
              fontSize: 14,
              // fontFamily: 'Varela-Regular',
              color: '#4D4D4D',
              marginTop: 3,
            }}>
            ₹ {amount.total}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Displayamt;
