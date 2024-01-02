import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import PlaceHolder from '../../components/PlaceHolder';

const CardInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContent}>
        <Text style={styles.text}>Detalle de tarjeta</Text>
        <Image
          resizeMode="contain"
          style={styles.imageStyles}
          source={require('../../../assets/qikcard.png')}
        />
      </View>
      <View style={styles.cardContent}>
        <PlaceHolder title="Numero de tarjeta" content="1234 1234 1324 1234" />
        <PlaceHolder
          title="Carholder Name"
          content="Pedro De Leon"
          copy={false}
        />
        <View style={styles.dateContent}>
          <PlaceHolder
            title="Expiration Date"
            content="01/29"
            width="70%"
            copy={false}
          />
          <PlaceHolder title="CCV" content="852" width="30%" copy={false} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  cardContent: {
    height: '50%',
    width: '90%',
    alignItems: 'center',
  },
  imageStyles: {
    height: 200,
  },
  text: {
    color: '#00375e',
    paddingVertical: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateContent: {flexDirection: 'row'},
});

export default CardInfo;
