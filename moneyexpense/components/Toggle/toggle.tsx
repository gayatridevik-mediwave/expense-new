import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

function Toggle(navigation: any) {
  const [isExpense, setExpense] = useState(true);
  return (
    <>
      <View style={styles.headingexpense}>
        {/* <Button onPress={() => navigation.goBack()} title="hello world" /> */}
        <TouchableOpacity
          style={styles.arrowicon}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left-l" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.expense}>Add expenses</Text>
      </View>
      <View style={styles.expincome}>
        <View style={styles.toggleexpense}>
          <TouchableOpacity style={{}} onPress={() => setExpense(true)}>
            <Text
              style={[styles.togglexpense, isExpense ? styles.active : null]}>
              Expenses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={() => setExpense(false)}>
            <Text
              style={[styles.togglexpense, isExpense ? null : styles.active]}>
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

  toggleexpense: {
    marginTop: 30,
    fontSize: 25,
    backgroundColor: '#7AD6DA',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },

  togglexpense: {
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
