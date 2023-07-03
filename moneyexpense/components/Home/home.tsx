import React from 'react';
import Header from '../Header/header';
import {
  Button,
  ImageBackground,
  // SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Addinfo from '../Addinfo/addinfo';
import Footer from '../Footer/footer';
import Datepicker from '../Datepicker/datepicker';
import Displayamt from '../Displayamt/displayamt';
import Card from '../Card/card';

const Image = require('../../assets/background.png');

function Home({navigation}: any) {
  const onPressAddbtn = () => {
    navigation.navigate('AddExpense');
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
            <Datepicker />
            <Displayamt />
            <Card />
            <Addinfo />
            {/* <Button
              title="first Screen"
              onPress={() => navigation.navigate('Design')}
            /> */}
          </View>
        </ScrollView>
      </ImageBackground>

      <Footer onPressAddbtn={onPressAddbtn} />
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
