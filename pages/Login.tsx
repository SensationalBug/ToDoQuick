import React from 'react';
import Form from '../components/Form';
import LogoIcon from 'react-native-vector-icons/AntDesign';
import ServiceIcon from 'react-native-vector-icons/AntDesign';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Login = ({navigation}: any) => {
  return (
    <>
      <Image style={[styles.image]} source={require('../assets/5.png')} />
      <View style={styles.loginContainer}>
        <View
          style={{
            flex: 2 / 3.5,
          }}>
          <View style={styles.logoContainer}>
            <LogoIcon name="chrome" size={30} color={'#000'} />
          </View>
          <View>
            <TouchableOpacity style={styles.helpButton}>
              <ServiceIcon name="customerservice" size={15} color={'#000'} />
              <Text style={styles.helpText}>Ayuda</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Form navigation={navigation} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Entidad Autorizada</Text>
          <Text style={styles.footerText}>Version 1.0.0</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    zIndex: -1,
    width: '100%',
    height: '70%',
    position: 'absolute',
    transform: [{translateY: 120}],
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    padding: 10,
    alignItems: 'center',
  },
  helpButton: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  helpText: {
    color: '#000',
    paddingHorizontal: 10,
  },
  formContainer: {
    flex: 1.8 / 3.5,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  footer: {
    padding: 10,
    flex: 1 / 3.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footerText: {
    padding: 5,
    color: '#000',
  },
});

export default Login;
