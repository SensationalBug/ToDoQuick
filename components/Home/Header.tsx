/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#dfdfdf',
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          padding: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 50,
            alignItems: 'center',
            backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff'}}>PD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 50,
            alignItems: 'center',
            backgroundColor: '#fff',
            justifyContent: 'center',
          }}>
          <Icon name="bell" size={18} color={'#003B73'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 15,
          paddingHorizontal: 25,
        }}>
        <Text style={{color: '#003B73', fontSize: 20, fontWeight: 'bold'}}>
          Hola, Pedro
        </Text>
      </View>
    </View>
  );
};

export default Header;
