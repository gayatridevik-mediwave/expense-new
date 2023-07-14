import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Toggle from '../../Toggle/toggle';
import ExpIncome from '../../ExpIncome/expIncome';
import Footer from '../Footer/footer';

function AddExpense({navigation}: any) {
  const handleStatistics = () => {
    navigation.navigate('Statistics');
  };
  const onHomebtn = () => {
    navigation.navigate('Home');
  };
  const [isExpense, setExpense] = useState(true);
  const onHandleExpense = () => {
    setExpense(true);
  };

  const onHandleIncome = () => {
    setExpense(false);
  };

  return (
    <>
      <ImageBackground
        style={styles.screenimage}
        resizeMode="cover"
        source={require('../../../assets/background.png')}>
        <ScrollView>
          <Toggle
            isExpense={isExpense}
            val={'Add Expenses'}
            goBack={() => {
              navigation.goBack();
            }}
            onHandleExpense={onHandleExpense}
            onHandleIncome={onHandleIncome}
          />
          <ExpIncome isExpense={isExpense} />
        </ScrollView>
      </ImageBackground>
      <Footer onHomebtn={onHomebtn} handleStatistics={handleStatistics} />
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
  monthimage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  calborder: {
    borderWidth: 3,
    borderRadius: 25,
    width: 40,
    height: 40,
    backgroundColor: '#08979D',
    borderColor: '#fff',
  },
  calendar: {
    position: 'absolute',
    width: 18,
    height: 18,
    top: 10,
    right: 12,
  },
  monthyear: {
    // position: 'relative',
    // marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outerCalendar: {
    position: 'relative',
    // zIndex: 1,
  },
  calIconstyle: {
    maxWidth: '90%',
    zIndex: 1,
    // position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default AddExpense;
