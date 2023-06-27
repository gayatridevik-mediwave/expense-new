/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MonenyDetails from '../../UserData/userdata';
import Innercard from '../Innercrd/innercrd';

function Card() {
  return (
    <View style={styles.cardback}>
      <FlatList
        data={MonenyDetails}
        renderItem={({item}) => (
          <>
            <View style={{marginBottom: 15, marginTop: 10}}>
              <Text style={{fontSize: 18, color: '#4D4D4D'}}>
                {item.dateMonthYear}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '43%',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 17, color: '#4D4D4D'}}>Income</Text>
                <Text style={{fontSize: 17, color: '#005257'}}>
                  ₹ {item.inAmt}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '48%',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 17, color: '#4D4D4D'}}>Expenses</Text>
                <Text style={{fontSize: 17, color: '#B91D1D'}}>
                  ₹ {item.expAmt}
                </Text>
              </View>
            </View>
            <Innercard />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardback: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});
export default Card;
