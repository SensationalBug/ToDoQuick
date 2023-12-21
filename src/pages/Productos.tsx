import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Surface from '../components/Surface';
import {productArray} from '../data/products';
import CustomButton from '../components/Buttons/CustomButton';

const Productos = () => {
  const buttons = (props: any) => (
    <CustomButton
      {...props}
      primaryTitle={'Movimiento'}
      secondaryTitle={'Enviar'}
      onPrimaryAction={() => console.log(props)}
      onSecondaryAction={() => console.log(props)}
    />
  );
  return (
    <ScrollView contentContainerStyle={styles.contentStyles}>
      {productArray.map(item => (
        <Surface
          item={item}
          width={'95%'}
          productButtons={() => buttons(item)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentStyles: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Productos;
