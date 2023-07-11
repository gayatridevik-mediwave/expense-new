import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Toggle from '../Toggle/toggle';
import Footer from '../Footer/footer';
import Charts from '../Charts/charts';

function Statistics(this: any, {navigation}: any) {
  const onHomebtn = () => {
    navigation.navigate('Home');
  };
  const handleStatistics = () => {
    navigation.navigate('Statistics');
  };
  const onPressAddbtn = () => {
    navigation.navigate('AddExpense');
  };

  return (
    <>
      <ImageBackground
        style={styles.screenimage}
        resizeMode="cover"
        source={require('../../assets/background.png')}>
        <ScrollView>
          <Toggle val="Statistics" goBack={() => navigation.goBack()} />
          <Charts />
        </ScrollView>
      </ImageBackground>
      <Footer
        onHomebtn={onHomebtn}
        handleStatistics={handleStatistics}
        onPressAddbtn={onPressAddbtn}
      />
    </>
  );
}

const styles = StyleSheet.create({
  screenimage: {
    flex: 1,
    padding: 20,
  },
  parentStyle: {
    backgroundColor: '#f7f7f7',
    border: '1px solid #ccc',
    margin: '2%',
    maxWidth: '40%',
  },
});
export default Statistics;
