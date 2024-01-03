import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PaymentNotificationBox = () => {
  return (
    <View style={styles.paymentNotificationBox}>
      <Icon
        size={30}
        name="calendar-clear-outline"
        style={styles.paymentNotificationBoxIcon}
      />
      <View>
        <Text style={styles.paymentNotificationText}>
          Fecha límite de pago 20 Ene 2025
        </Text>
        <Text style={styles.paymentNotificationSubText}>
          Fecha de corte 25 de Dic 2024
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentNotificationBox: {
    padding: 15,
    elevation: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eaebf0',
  },
  paymentNotificationBoxIcon: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    color: '#0f2f55',
    backgroundColor: '#fff',
  },
  paymentNotificationText: {
    color: '#17446b',
    paddingBottom: 10,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  paymentNotificationSubText: {
    paddingTop: 10,
    color: '#17446b',
  },
});

export default PaymentNotificationBox;
