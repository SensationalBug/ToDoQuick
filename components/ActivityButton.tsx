import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const ActivityButton = ({icon, title}: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={icon} size={30} color={'#17446b'} style={styles.icon} />
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
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e3f5ff',
    marginBottom: 10,
  },
  text: {
    color: '#17446b',
    width: '85%',
    textAlign: 'center',
    fontSize: 13,
  },
});

export default ActivityButton;
