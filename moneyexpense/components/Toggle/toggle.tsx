import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

function Toggle() {
  const [isExpense, setExpense] = useState(true);
  return (
    <>
      <View style={styles.headingexpense}>
        {/* <Button onPress={() => navigation.goBack()} title="hello world" /> */}
        <TouchableOpacity style={styles.arrowicon}>
          <Icon name="arrow-left-l" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.expense}>Add expenses</Text>
      </View>
      <View style={styles.expincome}>
        <View style={styles.toogleexpense}>
          <TouchableOpacity style={{}} onPress={() => setExpense(!isExpense)}>
            <Text
              style={[styles.tooglexpense, isExpense ? styles.active : null]}>
              Expenses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={() => setExpense(!isExpense)}>
            <Text
              style={[styles.tooglexpense, isExpense ? null : styles.active]}>
              Income
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screenimage: {
    flex: 1,
    padding: 20,
  },
  headingexpense: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowicon: {
    position: 'absolute',
    left: 0,
  },
  expense: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  expincome: {},

  toogleexpense: {
    marginTop: 30,
    fontSize: 25,
    backgroundColor: '#7AD6DA',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },

  tooglexpense: {
    color: '#000',
    fontSize: 18,
    paddingHorizontal: 50,
    // margin: 2,
    // padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  active: {
    borderRadius: 40,
    color: '#08979D',
    backgroundColor: '#fff',
    padding: 10,
    // margin: 5,
    // padding: 30,
    // paddingHorizontal: 30,
  },
});

export default Toggle;
