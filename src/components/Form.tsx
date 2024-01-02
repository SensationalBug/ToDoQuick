import React, {useState} from 'react';
import RNBiometrics from 'react-native-simple-biometrics';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FingerPrintIcon from 'react-native-vector-icons/MaterialIcons';
const Form = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const navigation = useNavigation();
  const toggleLoginButton = () => {
    setIsDisabled(!isDisabled);
  };
  const biometrics = async () => {
    const can = await RNBiometrics.canAuthenticate();
    if (can) {
      try {
        await RNBiometrics.requestBioAuth('Confirmar', '.');
        toggleLoginButton();
        console.log('Si');
        opacity === 0.5 ? setOpacity(1) : setOpacity(0.5);
      } catch (error) {
        console.log('No');
      }
    }
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formContainerText}>Hola, Pedro!</Text>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={'#9C9C9C'}
        style={styles.textInput}
      />
      <View style={styles.formText}>
        <Text style={styles.formTextColor}>Recordarme</Text>
        <TouchableOpacity>
          <Text style={styles.formTextColor}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          disabled={isDisabled}
          style={[
            styles.buttonStyle,
            {opacity: isDisabled ? opacity : undefined},
          ]}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.fingerPrintStyle}
          onPress={() => biometrics()}>
          <FingerPrintIcon name="fingerprint" size={25} color="#000" />
          <Text style={styles.fingerPrintText}>
            Ingresar con huella digital
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  formContainerText: {color: '#000', fontSize: 25, fontWeight: 'bold'},
  textInput: {
    padding: 10,
    width: '90%',
    color: '#000',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
  },
  formText: {
    width: '90%',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formTextColor: {color: '#000'},
  buttonContainer: {width: '90%'},
  buttonStyle: {
    padding: 15,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#013b73',
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
  fingerPrintStyle: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fingerPrintText: {color: '#000', paddingHorizontal: 10, fontSize: 18},
});

export default Form;
