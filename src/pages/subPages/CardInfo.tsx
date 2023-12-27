import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const CardInfo = () => {
  return (
    <View style={{}}>
      <View style={styles.cardContent}>
        <Text style={styles.text}>Detalle de tarjeta</Text>
        <Image
          source={require('../../../assets/qikcard.png')}
          resizeMode="contain"
          style={styles.imageStyles}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.text}>Numero</Text>
        <Text style={styles.text}>Name</Text>
        <View>
          <Text style={styles.text}>Expiration</Text>
          <Text style={styles.text}>CCV</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageStyles: {
    height: 200,
  },
  text: {color: '#000'},
});

export default CardInfo;
