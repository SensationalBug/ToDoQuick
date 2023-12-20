import React from 'react';
import {Button} from 'react-native-paper';

const CustomButton = ({onAction, title}: any) => (
  <Button onPress={onAction}>{title}</Button>
);

export default CustomButton;
