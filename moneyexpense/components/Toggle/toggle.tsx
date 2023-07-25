import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

interface ToggleCompProps {
  val?: string;
  goBack?: any;
  // navigation?: any;
  isExpense?: boolean;
  onHandleExpense?: any;
  onHandleIncome?: any;
  show?: boolean;
}

const Toggle: React.FC<ToggleCompProps> = ({
  val,
  goBack,
  isExpense,
  onHandleExpense,
  onHandleIncome,
  show,
}) => {
  return (
    <>
      <View style={styles.headingexpense}>
        <TouchableOpacity style={styles.arrowicon} onPress={goBack}>
          <Icon name="arrow-left-l" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.expense}>{val}</Text>
      </View>
      {show && (
        <View style={styles.expincome}>
          <View style={styles.toggleexpense}>
            <TouchableOpacity onPress={onHandleExpense}>
              <Text
                style={[styles.togglexpense, isExpense ? styles.active : null]}>
                Expenses
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleIncome}>
              <Text
                style={[styles.togglexpense, isExpense ? null : styles.active]}>
                Income
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  active: {
    borderRadius: 40,
    color: '#08979D',
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default Toggle;
