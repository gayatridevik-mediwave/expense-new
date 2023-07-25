import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Toggle from '../../Toggle/toggle';
import Footer from '../Footer/footer';
import Charts from '../../Charts/charts';

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
  const navigateProfile = () => {
    navigation.navigate('Profile');
  };
  const labelExpense = [
    {x: '20%', y: 35},
    {x: '24%', y: 40},
    {x: '40%', y: 55},
    {x: '16%', y: 20},
    {x: '30%', y: 70},
  ];

  const labelIncome = [
    {x: '15%', y: 35},
    {x: '30%', y: 40},
    {x: '45%', y: 55},
    {x: '25%', y: 20},
    {x: '50%', y: 70},
  ];
  const [isExpense, setExpense] = useState(true);
  const colorExpense = ['#E85D04', '#FAA307', '#FFBA08', 'gold', '#DC2F02'];
  const colorIncome = ['blue', 'navy', 'indigo', 'purple', '#4361EE'];

  const textColor = 'red';
  const textIncome = 'navy';

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
            val="Statistics"
            goBack={() => navigation.goBack()}
            onHandleExpense={onHandleExpense}
            onHandleIncome={onHandleIncome}
            show={true}
          />
          <Charts
            textColor={isExpense ? textColor : textIncome}
            labelData={isExpense ? labelExpense : labelIncome}
            colorExpense={isExpense ? colorExpense : colorIncome}
          />
        </ScrollView>
      </ImageBackground>
      <Footer
        onHomebtn={onHomebtn}
        handleStatistics={handleStatistics}
        onPressAddbtn={onPressAddbtn}
        navigateProfile={navigateProfile}
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
