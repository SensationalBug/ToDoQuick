import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ActivityButton = ({icon, title}: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={icon} size={15} color={'#17446b'} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '25%',
    alignItems: 'center',
  },
  icon: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#e3f5ff',
  },
  text: {
    width: '65%',
    fontSize: 14,
    color: '#17446b',
    textAlign: 'center',
  },
});

export default ActivityButton;
