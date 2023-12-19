import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Gastos from './Gastos';
import Productos from './Productos';
import Soporte from './Soporte';

const Main = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home
    ">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Productos" component={Productos} />
      <Tab.Screen name="Gastos" component={Gastos} />
      <Tab.Screen name="Soporte" component={Soporte} />
    </Tab.Navigator>
  );
};

export default Main;
