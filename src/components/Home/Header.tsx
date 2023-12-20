import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContent}>
        <TouchableOpacity style={styles.userButton}>
          <Text style={styles.userButtonText}>PD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNotification}>
          <Icon name="bell" size={18} color={'#003B73'} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerWelcome}>
        <Text style={styles.headerWelcomeText}>Hola, Pedro</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  userContent: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userButton: {
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0082cd',
  },
  userButtonText: {color: '#fff'},
  iconNotification: {
    padding: 10,
    elevation: 10,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headerWelcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingHorizontal: 25,
  },
  headerWelcomeText: {color: '#003B73', fontSize: 20, fontWeight: 'bold'},
});

export default Header;
