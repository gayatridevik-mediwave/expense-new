import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Toggle from '../Toggle/toggle';
import ExpIncome from '../ExpIncome/expIncome';
import Footer from '../Footer/footer';

function AddExpense() {
  return (
    <>
      <ImageBackground
        style={styles.screenimage}
        resizeMode="cover"
        source={require('../../assets/background.png')}>
        <ScrollView>
          <Toggle />
          <ExpIncome />
        </ScrollView>
      </ImageBackground>
      <Footer />
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

export default AddExpense;
