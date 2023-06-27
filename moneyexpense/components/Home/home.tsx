import React from 'react';
import Header from '../Header/header';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Addinfo from '../Addinfo/addinfo';
import Footer from '../Footer/footer';
import Datepicker from '../Datepicker/datepicker';

function Home({navigation}: any) {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.screenimage}
        source={require('../../assets/background.png')}>
        <View style={styles.container}>
          <Header />
          <View>
            <Text style={styles.manage}>Manage your expenses</Text>
          </View>
          <Datepicker />

          {/* <Button
            title="First Screen"
            onPress={() => navigation.navigate('Design')}
          /> */}
          <Addinfo />
        </View>
      </ImageBackground>
      <Footer />
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
    fontFamily: 'Varela-Regular',
  },
});
export default Home;
