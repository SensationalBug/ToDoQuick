import React from 'react';

import {StyleSheet, SafeAreaView, useWindowDimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';

const Main = () => {
  const layout = useWindowDimensions().height;
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={[styles.container, {height: layout}]}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: '#fff'},
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default Main;
