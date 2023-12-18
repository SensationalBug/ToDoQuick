/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Surface = () => {
  return (
    <View style={styles.surfaceContainer}>
      <Text style={{color: '#000'}}>1</Text>
      <Text style={{color: '#000'}}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  surfaceContainer: {
    width: 300,
    margin: 10,
    height: 150,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Surface;
