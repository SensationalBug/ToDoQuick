import React from 'react';
import Surface from '../components/Surface';
import {productArray} from '../data/products';
import {View, Text, FlatList} from 'react-native';
import CustomButton from '../components/Buttons/CustomButton';

const Productos = () => {
  const buttons = (props: any) => (
    <CustomButton {...props} title="uno" onAction={() => console.log(props)} />
  );
  return (
    <View>
      <View>
        <Text>Tus Productos</Text>
      </View>
      <View>
        <FlatList
          data={productArray}
          renderItem={({item}: any) => (
            <Surface
              item={item}
              margin={20}
              width="90%"
              productButtons={(props: any) => buttons(props)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Productos;
