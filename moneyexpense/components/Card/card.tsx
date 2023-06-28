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
            <View style={styles.displayMonth}>
              <Text style={styles.displayContent}>{item.dateMonthYear}</Text>
            </View>

            <View style={styles.cardDesign}>
              <View style={styles.incomeDesgin}>
                <Text style={styles.accountText}>Income</Text>
                <Text style={styles.incomeText}>₹ {item.inAmt}</Text>
              </View>

              <View style={styles.expenseDesgin}>
                <Text style={styles.accountText}>Expenses</Text>
                <Text style={styles.expenseText}>₹ {item.expAmt}</Text>
              </View>
            </View>
            <Innercard data={item} />
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

  displayMonth: {
    marginBottom: 15,
    marginTop: 10,
  },
  displayContent: {
    fontSize: 18,
    color: '#4D4D4D',
  },
  cardDesign: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  incomeDesgin: {
    flexDirection: 'row',
    width: '43%',
    justifyContent: 'space-between',
  },
  expenseDesgin: {
    flexDirection: 'row',
    width: '48%',
    justifyContent: 'space-between',
  },
  accountText: {fontSize: 17, color: '#4D4D4D'},
  incomeText: {fontSize: 17, color: '#005257'},
  expenseText: {fontSize: 17, color: '#B91D1D'},
});
export default Card;
