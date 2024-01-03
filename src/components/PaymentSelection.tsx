import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomRadioButtom from './CustomRadioButtom';
import {Button} from 'react-native-paper';

const PaymentSelection = ({params}: any) => {
  const [radioValue, setRadioValue] = useState(0);
  const [debidCardValue, setDebitCardValue] = useState({
    ccAmount: 0,
    cardCap: 0,
  });
  const setValue = (value: number) => {
    setRadioValue(value);
  };
  const getDebitCardValue = useCallback(() => {
    params.map((elem: any) => {
      elem.type === 1
        ? setDebitCardValue({
            ccAmount: elem.productAmount,
            cardCap: elem.cardCap,
          })
        : null;
    });
  }, [params]);
  useEffect(() => getDebitCardValue(), [getDebitCardValue]);
  return (
    <View style={styles.radiobuttonContainer}>
      <View style={styles.radioButtomStyles}>
        <Text style={styles.headerTitle}>Elige el monto que quieres pagar</Text>
        <CustomRadioButtom
          value={1}
          title="Mínimo pendiente"
          subtitle="Evita afectar tu historial crediticio"
          selectedValue={radioValue}
          setSelected={setValue}
          amount={(debidCardValue.cardCap - debidCardValue.ccAmount) * 0.05}
        />
        <CustomRadioButtom
          value={2}
          title="Pendiente al corte"
          subtitle="Evita cagos por interes"
          selectedValue={radioValue}
          setSelected={setValue}
          amount={debidCardValue.cardCap - debidCardValue.ccAmount + 2000}
        />
        <CustomRadioButtom
          value={3}
          title="Balance a la fecha"
          subtitle="Pagarás todo lo consumido"
          selectedValue={radioValue}
          setSelected={setValue}
          amount={debidCardValue.cardCap - debidCardValue.ccAmount}
        />
        <CustomRadioButtom
          value={4}
          title="Otro monto"
          selectedValue={radioValue}
          setSelected={setValue}
          amount={0}
        />
      </View>
      <Button
        mode="contained"
        buttonColor="#0f2f55"
        style={[styles.radioButton]}
        disabled={radioValue && radioValue !== 4 ? false : true}>
        Continuar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  radiobuttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    padding: 20,
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  radioButtomStyles: {
    alignItems: 'center',
  },
  radioButton: {
    padding: 5,
    width: '90%',
    marginBottom: 10,
  },
});

export default PaymentSelection;
