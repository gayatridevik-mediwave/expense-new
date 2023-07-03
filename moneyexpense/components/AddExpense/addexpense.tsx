import React from 'react';
import {Button, View} from 'react-native';
// import Footer from '../Footer/footer';

function AddExpense({navigation}: any) {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="hello world" />
    </View>
  );
}

export default AddExpense;
