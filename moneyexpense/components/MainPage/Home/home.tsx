import React, {useState} from 'react';
import Header from '../../Header/header';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Addinfo from '../../Addinfo/addinfo';
import Footer from '../Footer/footer';
import Displayamt from '../../Displayamt/displayamt';
import Card from '../../Card/card';
import DateComp from '../../DataCOmp/DateComp';
import moment from 'moment';

const Image = require('../../../assets/background.png');

function Home({navigation}: any) {
  const onPressAddbtn = () => {
    navigation.navigate('AddExpense');
  };
  const handleStatistics = () => {
    navigation.navigate('Statistics');
  };
  const navigateProfile = () => {
    navigation.navigate('Profile');
  };
  const [calendarShow, setcalendarShow] = useState(false);

  const onDateIconClick = () => {
    setcalendarShow(!calendarShow);
  };

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.screenimage}
        source={Image}>
        <ScrollView>
          <View style={styles.container}>
            <Header />
            <View>
              <Text style={styles.manage}>Manage your expenses</Text>
            </View>
            <DateComp
              prevNext={true}
              show={calendarShow}
              onDateIconClick={onDateIconClick}
              month={moment(new Date()).format('MMMM YYYY')}
            />
            <Displayamt />
            <Card />
            <Addinfo />
          </View>
        </ScrollView>
      </ImageBackground>

      <Footer
        // onHomebtn={onHomebtn}
        onPressAddbtn={onPressAddbtn}
        handleStatistics={handleStatistics}
        navigateProfile={navigateProfile}
        ontest={() => navigation.navigate('Test')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  screenimage: {
    flex: 1,
  },
  manage: {
    marginTop: 20,
    fontSize: 33,
    color: '#fff',
    textAlign: 'left',
  },
});
export default Home;
