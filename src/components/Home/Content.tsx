import React from 'react';
import Surface from '../Surface';
import ActivityButton from '../ActivityButton';
import {productArray} from '../../data/products';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
const Content = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <View style={styles.contentHeader}>
        <Text style={styles.contentHeaderText}>Maneja tus productos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Productos')}>
          <Text style={styles.contentHeaderButton}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={productArray}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}: any) => (
          <Surface item={item} productButtons={() => {}} />
        )}
      />
      <View style={styles.subContent}>
        <Text style={styles.subContentText}>Que quieres hacer?</Text>
        <View style={styles.subContentButtons}>
          <ActivityButton
            to={'CardInfo'}
            icon="eye"
            title="Ver numero de tarjeta"
          />
          <ActivityButton
            to={'PayCard'}
            icon="dollar-sign"
            title="Pagar tarjeta"
            params={productArray}
          />
          <ActivityButton
            to={'CardInfo'}
            icon="file-text"
            title="Pago de servicios"
          />
          <ActivityButton to={'CardInfo'} icon="grid" title="Ver mas" />
        </View>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.subContentText}>Enterate que tenemos para ti</Text>
        <View style={styles.shareContent}>
          <View style={styles.shareContainer}>
            <Text>Invita a tus amigos</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    elevation: 20,
    backgroundColor: '#fff',
  },
  contentHeader: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentHeaderText: {
    fontSize: 18,
    color: '#000',
    paddingHorizontal: 15,
  },
  contentHeaderButton: {
    color: '#003B73',
    paddingHorizontal: 15,
  },
  subContent: {paddingTop: 5},
  subContentText: {
    color: '#000',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  subContentButtons: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  shareContent: {
    width: '100%',
    alignItems: 'center',
  },
  shareContainer: {
    width: '95%',
    margin: 10,
    height: 150,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#0082cd',
  },
});

export default Content;
