import React from 'react';
import Home from './Home';
import Gastos from './Gastos';
import Soporte from './Soporte';
import Productos from './Productos';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Main = () => {
  const Tab = createBottomTabNavigator();
  const tabIcon = (iconName: any, color: any, size: any) => {
    return <Icon name={iconName} color={color} size={size} />;
  };
  return (
    <Tab.Navigator
      initialRouteName="Productos"
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color, size}: any) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Productos') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Gastos') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          } else if (route.name === 'Soporte') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }
          return tabIcon(iconName, color, size);
        },
        headerShown: false,
        tabBarActiveTintColor: '#0082cd',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Productos"
        component={Productos}
        options={{
          headerShown: true,
          headerStatusBarHeight: 30,
          headerTitle: 'Tus productos',
          headerTitleStyle: {color: '#00294f'},
          // headerStyle={}
        }}
      />
      <Tab.Screen name="Gastos" component={Gastos} />
      <Tab.Screen name="Soporte" component={Soporte} />
    </Tab.Navigator>
  );
};

export default Main;
