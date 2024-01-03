import React from 'react';
import {formatter} from '../calcs/formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface radioTypes {
  value: number;
  title: string;
  subtitle?: string;
  selectedValue?: number;
  setSelected?: any;
  amount?: number;
}

const CustomRadioButtom = ({
  value,
  title,
  subtitle,
  selectedValue,
  setSelected,
  amount = 0,
}: radioTypes) => {
  return (
    <TouchableOpacity
      style={styles.RadioButtonBox}
      onPress={() => setSelected(value)}>
      <View style={styles.RadioButtonContent}>
        <Icon
          size={20}
          style={styles.RadioButtonIcon}
          name={
            selectedValue === value ? 'radio-button-on' : 'radio-button-off'
          }
        />
        <View>
          {subtitle ? (
            <>
              <Text style={styles.RadioButtonText}>{title}</Text>
              <Text style={styles.RadioButtonSubText}>{subtitle}</Text>
            </>
          ) : (
            <Text style={styles.RadioButtonText}>{title}</Text>
          )}
        </View>
      </View>
      {amount ? (
        <Text style={styles.RadioButtonAmount}>{formatter.format(amount)}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  RadioButtonBox: {
    minWidth: '95%',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderColor: '#cccccc',
    justifyContent: 'space-between',
  },
  RadioButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RadioButtonIcon: {
    color: '#000',
    marginRight: 10,
  },
  RadioButtonText: {
    fontSize: 13,
    color: '#000',
  },
  RadioButtonSubText: {
    fontSize: 12,
    color: '#777777',
  },
  RadioButtonAmount: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomRadioButtom;
