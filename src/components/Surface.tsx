import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomProgressBar from './CustomProgressBar';
import {formatter} from '../calcs/formatter';

interface productInfo {
  type: number;
  cardCap?: number;
  available: boolean;
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
    type,
    cardCap,
    available,
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

  return (
    <View
      style={[
        styles.surfaceContainer,
        {margin: margin || 10, width: width || 280},
      ]}>
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <Icon size={20} color={'#000'} style={styles.icon} name={iconName} />
          <Text style={styles.surfaceContainerText}>{productName}:</Text>
          <Text style={styles.surfaceContainerSubTitle}>
            *{Array.from(productNumber.toString()).splice(12, 4).join('')}
          </Text>
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
      <CustomProgressBar productAmount={productAmount} cardCap={cardCap} />
      {productButtons(productButtonsProps)}
    </View>
  );
};

const styles = StyleSheet.create({
  surfaceContainer: {
    elevation: 7,
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
  text: {flexDirection: 'row'},
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
  surfaceContainerAmountText: {fontSize: 20},
});

export default Surface;
