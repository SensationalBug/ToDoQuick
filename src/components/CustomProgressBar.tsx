/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {formatter} from '../calcs/formatter';

const CustomProgressBar = ({productAmount, cardCap}: any) => {
  return (
    <View
      style={{
        width: '80%',
        marginVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#999'}}>Balance</Text>
        <Text style={{color: '#999'}}>{formatter.format(productAmount)}</Text>
      </View>
      <View
        style={{
          paddingTop: 10,
        }}>
        <ProgressBar
          color="#69cbbc"
          progress={productAmount / (cardCap || 1000000)}
          style={{borderRadius: 50, height: 6}}
        />
      </View>
    </View>
  );
};

export default CustomProgressBar;
