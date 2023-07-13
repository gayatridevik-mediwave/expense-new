import React from 'react';

import Home from './components/Home/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddExpense from './components/AddExpense/addexpense';
import Statistics from './components/Statistics/statistics';
import Test from './components/Test/Test';

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
        <Stack.Screen
          name="AddExpense"
          options={{headerShown: false}}
          component={AddExpense}
        />
        <Stack.Screen
          name="Statistics"
          options={{headerShown: false}}
          component={Statistics}
        />
        <Stack.Screen
          name="Test"
          options={{headerShown: false}}
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
