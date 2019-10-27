import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/styles';
import Button from '../components/Button';
import { resizeFont, convertValue } from './Utils';

function Portrait(props) {
  const { isClear, tempDisplay, currentValue, operator, onTapButton } = props;
  return (
    <>
      <Text style={[styles.value, resizeFont(tempDisplay || currentValue)]}>
        {convertValue(tempDisplay || currentValue)}
      </Text>
      <View style={styles.row}>
        <Button
          text={isClear ? 'AC' : 'C'}
          theme="secondary"
          onPress={() => onTapButton('clear')}
        />
        <Button
          text="+/_"
          theme="secondary"
          onPress={() => onTapButton('posneg')}
        />
        <Button
          text="%"
          theme="secondary"
          onPress={() => onTapButton('percentage')}
        />
        <Button
          text="÷"
          textStyle={styles.textMulti}
          onPress={() => onTapButton('operator', '/')}
          theme={operator === '/' ? 'accentActive' : 'accent'}
        />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => onTapButton('number', 7)} />
        <Button text="8" onPress={() => onTapButton('number', 8)} />
        <Button text="9" onPress={() => onTapButton('number', 9)} />
        <Button
          text="×"
          textStyle={styles.textMulti}
          onPress={() => onTapButton('operator', '*')}
          theme={operator === '*' ? 'accentActive' : 'accent'}
        />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => onTapButton('number', 4)} />
        <Button text="5" onPress={() => onTapButton('number', 5)} />
        <Button text="6" onPress={() => onTapButton('number', 6)} />
        <Button
          text="−"
          textStyle={styles.textMulti}
          theme={operator === '-' ? 'accentActive' : 'accent'}
          onPress={() => onTapButton('operator', '-')}
        />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => onTapButton('number', 1)} />
        <Button text="2" onPress={() => onTapButton('number', 2)} />
        <Button text="3" onPress={() => onTapButton('number', 3)} />
        <Button
          text="+"
          textStyle={styles.textMulti}
          theme={operator === '+' ? 'accentActive' : 'accent'}
          onPress={() => onTapButton('operator', '+')}
        />
      </View>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <Button
          text="0"
          size="double"
          onPress={() => onTapButton('number', 0)}
        />
        <Button text="." onPress={() => onTapButton()} />
        <Button text="=" theme="accent" onPress={() => onTapButton('equal')} />
      </View>
    </>
  );
}

Portrait.propTypes = {};

export default Portrait;
