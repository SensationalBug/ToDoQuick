import React from 'react';
import {formatter} from '../../calcs/formatter';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import PaymentNotificationBox from '../../components/PaymentNotificationBox';
import PaymentSelection from '../../components/PaymentSelection';

const PayCard = ({route}: any) => {
  const navigation = useNavigation();
  const {params} = route;
  const layout = useWindowDimensions().height;
  return (
    <View style={{height: layout}}>
      <View style={styles.header}>
        <Icon
          size={25}
          name="arrow-back"
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Pagar tarjeta</Text>
      </View>
      <View style={styles.headerAccount}>
        <Text style={styles.headerAccountText}>Disponible en tu cuenta</Text>
        {params.map((elem: any, key: any) =>
          elem.type === 2 ? (
            <Text key={key} style={styles.headerAccountAmount}>
              {formatter.format(elem.productAmount)}
            </Text>
          ) : null,
        )}
      </View>
      <PaymentNotificationBox />
      <PaymentSelection params={params} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerIcon: {
    width: '10%',
    color: '#0f2f55',
  },
  headerText: {
    width: '80%',
    fontSize: 16,
    color: '#0f2f55',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerAccount: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  headerAccountText: {
    color: '#0f2f55',
  },
  headerAccountAmount: {
    color: '#000',
    fontWeight: 'bold',
  },
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

export default PayCard;
