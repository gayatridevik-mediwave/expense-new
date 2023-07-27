/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Footer from '../Footer/footer';
import Toggle from '../../Toggle/toggle';
import Collapisble from '../../Collapisble/collapisble';

function Profile(this: any, {navigation}: any) {
  const onHomebtn = () => {
    navigation.navigate('Home');
  };
  const handleStatistics = () => {
    navigation.navigate('Statistics');
  };
  const onPressAddbtn = () => {
    navigation.navigate('AddExpense');
  };

  const navigateProfile = () => {
    navigation.navigate('Profile');
  };
  const ontest = () => {
    navigation.navigate('Test');
  };

  return (
    <>
      <ImageBackground
        style={styles.screenimage}
        resizeMode="cover"
        source={require('../../../assets/background.png')}>
        <ScrollView>
          <Toggle val="Profile" goBack={() => navigation.goBack()} />
          <Collapisble />
        </ScrollView>
      </ImageBackground>
      <Footer
        onHomebtn={onHomebtn}
        handleStatistics={handleStatistics}
        onPressAddbtn={onPressAddbtn}
        navigateProfile={navigateProfile}
        ontest={ontest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  screenimage: {
    flex: 1,
    padding: 20,
  },
  circleDesign: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#0096C7',
    borderWidth: 3,
    borderColor: '#90E0EF',
  },
  cardback: {
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 40,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  innercard: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginBottom: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    marginHorizontal: 5,
    borderColor: 'green',
    padding: 15,
  },
  innercrdbtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Profile;
