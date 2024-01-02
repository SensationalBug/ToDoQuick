import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const PlaceHolder = ({title, content, width = '100%', copy = true}: any) => {
  return (
    <View style={[styles.placeHolderContainer, {width: width}]}>
      <Text style={styles.inputText}>{title}</Text>
      <View style={[styles.input]}>
        <Text style={styles.inputText}>{content}</Text>
        {copy ? (
          <TouchableOpacity>
            <Text style={styles.inputCopy}>Copiar</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeHolderContainer: {
    paddingHorizontal: 10,
  },
  inputText: {
    color: '#000',
  },
  inputCopy: {
    color: '#00375e',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    marginVertical: 15,
    flexDirection: 'row',
    borderColor: '#d0d0d0',
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-between',
  },
});

export default PlaceHolder;
