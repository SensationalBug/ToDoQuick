import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, SafeAreaView, useWindowDimensions} from 'react-native';

import Login from './pages/Login';
import Main from './pages/Main';

function App(): React.JSX.Element {
  const layout = useWindowDimensions().height;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.container, {height: layout}]}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              contentStyle: {backgroundColor: '#fff'},
            }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
