import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Footer from '../MainPage/Footer/footer';
// import Datepicker from '../Datepicker/datepicker';

function Test({navigation}: any) {
  const Image = require('../../assets/background.png');

  const onHomebtn = () => {
    navigation.navigate('Home');
  };
  const onPressAddbtn = () => {
    navigation.navigate('AddExpense');
  };
  const handleStatistics = () => {
    navigation.navigate('Statistics');
  };
  const navigateProfile = () => {
    navigation.navigate('Profile');
  };
  // const ontest = () => {
  //   navigation.navigate('Test');
  // };
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.screenimage}
        source={Image}>
        <View style={styles.cardback}>
          <Text style={styles.textColor}>Oops!! Page was Empty</Text>
        </View>
      </ImageBackground>

      <Footer
        onHomebtn={onHomebtn}
        onPressAddbtn={onPressAddbtn}
        handleStatistics={handleStatistics}
        navigateProfile={navigateProfile}
        // ontest={ontest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cardback: {
    backgroundColor: '#fff',
    margin: 40,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  screenimage: {
    flex: 1,
  },
  textColor: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default Test;
