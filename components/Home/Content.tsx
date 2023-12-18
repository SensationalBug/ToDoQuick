/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Surface from '../Surface';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ActivityButton from '../ActivityButton';

const Content = () => {
  const products = [1, 2, 3];
  return (
    <View
      style={{
        shadowColor: 'red',
        shadowOffset: {
          width: 1,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
      }}>
      <View
        style={{
          marginTop: 30,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            paddingHorizontal: 15,
            color: '#000',
            fontSize: 20,
          }}>
          Maneja tus productos
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              paddingHorizontal: 15,
              color: '#003B73',
            }}>
            Ver todos
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={products}
        renderItem={() => <Surface />}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{marginTop: 20}}>
        <Text
          style={{
            paddingHorizontal: 15,
            color: '#000',
            fontSize: 20,
          }}>
          Que quieres hacer?
        </Text>
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
          }}>
          <ActivityButton icon="rightcircle" title="Ver numero de tarjeta" />
          <ActivityButton icon="leftcircle" title="Pagar tarjeta" />
          <ActivityButton icon="upcircle" title="Pago de servicios" />
          <ActivityButton icon="downcircle" title="Ver mas" />
        </View>
      </View>
    </View>
  );
};

export default Content;
