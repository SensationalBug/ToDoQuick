import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Surface = () => {
  return (
    <View style={styles.surfaceContainer}>
      <View>
        <View style={styles.text}>
          <Icon
            name="credit-card"
            color={'#000'}
            style={styles.icon}
            size={15}
          />
          <Text style={styles.surfaceContainerText}>Nombre del producto:</Text>
          <Text style={styles.surfaceContainerSubTitle}>*7582</Text>
        </View>
        <Text
          style={[
            styles.surfaceContainerSubTitle,
            styles.surfaceContainerSubText,
          ]}>
          Disponible
        </Text>
      </View>
      <Text
        style={[
          styles.surfaceContainerSubTitle,
          styles.surfaceContainerAmountText,
        ]}>
        RD$999,999.99
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  surfaceContainer: {
    margin: 10,
    width: 300,
    height: 150,
    padding: 15,
    elevation: 7,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  text: {flexDirection: 'row'},
  icon: {
    marginRight: 10,
    transform: [{rotate: '90deg'}],
  },
  surfaceContainerText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  surfaceContainerSubTitle: {
    fontSize: 18,
    color: '#999',
    marginLeft: 5,
  },
  surfaceContainerSubText: {
    fontSize: 14,
  },
  surfaceContainerAmountText: {
    fontSize: 20,
  },
});

export default Surface;
