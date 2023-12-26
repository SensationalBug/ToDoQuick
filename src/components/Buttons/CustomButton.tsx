import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const CustomButton = ({
  primaryTitle,
  secondaryTitle,
  onPrimaryAction,
  onSecondaryAction,
}: any) => (
  <View style={styles.buttonContainer}>
    <Button
      style={styles.buttonStyles}
      onPress={onPrimaryAction}
      textColor="#0082cd">
      {primaryTitle}
    </Button>
    <Button
      style={styles.buttonStyles}
      onPress={onSecondaryAction}
      textColor="#0082cd">
      {secondaryTitle}
    </Button>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyles: {
    width: '40%',
    backgroundColor: '#e3f5ff',
  },
});

export default CustomButton;
