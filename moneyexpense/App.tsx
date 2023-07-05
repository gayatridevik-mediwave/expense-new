import React from 'react';

import Home from './components/Home/home';
import {Button, ImageBackground, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddExpense from './components/AddExpense/addexpense';
// import test from './assets/fonts/'
function Design({navigation}: any) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.screenimage}
      source={require('./assets/background.png')}>
      <View style={styles.container}>
        <Button
          title="Second Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen name="Design" component={Design} />
        <Stack.Screen
          name="AddExpense"
          options={{headerShown: false}}
          component={AddExpense}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App;
