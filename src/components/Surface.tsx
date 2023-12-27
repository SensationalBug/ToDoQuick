import React, {useState} from 'react';
import {formatter} from '../calcs/formatter';
import {useRoute} from '@react-navigation/native';
import CustomProgressBar from './CustomProgressBar';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface productInfo {
  id: number;
  due: number;
  type: number;
  cardCap?: number;
  available: boolean;
  paymentDate?: string;
  productName: string;
  productNumber: number;
  productAmount: number;
}

const Surface = ({
  item,
  width,
  margin,
  productButtons,
  ...productButtonsProps
}: any) => {
  const {
    id,
    due,
    type,
    cardCap,
    available,
    paymentDate,
    productName,
    productNumber,
    productAmount,
  }: productInfo = item;
  const iconName =
    type === 1
      ? 'journal-outline'
      : type === 2
      ? 'cash-outline'
      : type === 3
      ? 'receipt-outline'
      : '';
  const route = useRoute().name;
  const [show, setShow] = useState(false);
  return (
    <View
      key={id}
      style={[
        styles.surfaceContainer,
        {margin: margin || 10, width: width || 280},
      ]}>
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <View style={styles.textTitle}>
            <Icon
              size={20}
              color={'#000'}
              name={iconName}
              style={styles.icon}
            />
            <Text style={styles.surfaceContainerText}>{productName}:</Text>
            <Text style={styles.surfaceContainerSubTitle}>
              *{Array.from(productNumber.toString()).splice(12, 4).join('')}
            </Text>
          </View>
          {type === 3 && route === 'Productos' ? (
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Icon name="chevron-down" size={25} color={'#000'} />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text
          style={[
            styles.surfaceContainerSubTitle,
            styles.surfaceContainerSubText,
          ]}>
          {available ? 'Disponible' : 'No disponible'}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.surfaceContainerSubTitle,
            styles.surfaceContainerAmountText,
          ]}>
          {formatter.format(productAmount)}
        </Text>
      </View>
      {cardCap && route === 'Productos' ? (
        <CustomProgressBar productAmount={productAmount} cardCap={cardCap} />
      ) : null}
      {type !== 3 ? productButtons(productButtonsProps) : null}
      {route === 'Productos' && show ? (
        <View>
          {type === 3 ? (
            <View style={styles.hiddenInfo}>
              <View>
                <Text style={styles.surfaceContainerText}>Proxima cuota:</Text>
                <Text
                  style={[
                    styles.surfaceContainerSubTitle,
                    styles.surfaceContainerAmountText,
                  ]}>
                  {formatter.format(due)}
                </Text>
              </View>
              <View>
                <Text style={styles.surfaceContainerText}>Fecha de pago:</Text>
                <Text
                  style={[
                    styles.surfaceContainerSubTitle,
                    styles.surfaceContainerAmountText,
                  ]}>
                  {paymentDate}
                </Text>
              </View>
            </View>
          ) : null}
          {productButtons(productButtonsProps)}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  surfaceContainer: {
    elevation: 7,
    minHeight: 150,
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  textContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  text: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    width: '90%',
    flexDirection: 'row',
  },
  icon: {marginRight: 10},
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
  surfaceContainerSubText: {fontSize: 14},
  surfaceContainerAmountText: {fontSize: 20, marginVertical: 5},
  hiddenInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Surface;
