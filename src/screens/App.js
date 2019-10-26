import React, { Component } from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles/styles';
import Button from '../components/Button';
import { resizeFont, convertValue, executeOperation } from './Utils';

const defaultState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
  tempDisplay: '0',
  isClear: true,
  isEqual: false,
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  onTapButton(type, value) {
    const { currentValue } = this.state;
    switch (type) {
      case 'number':
        this.handleNumber(value);
        break;
      case 'operator':
        this.handleOperator(value);
        break;
      case 'equal':
        this.handleEqual();
        break;
      case 'clear':
        this.setState(defaultState);
        break;
      case 'posneg':
        this.setState({ currentValue: `${parseFloat(currentValue) * -1}` });
        break;
      case 'percentage':
        this.setState({
          currentValue: `${parseFloat(currentValue) * 0.01}`,
        });
        break;
      default:
        return;
    }
  }

  handleOperator(value) {
    const { currentValue, previousValue, operator, isEqual } = this.state;
    // if (operator !== value) {
    this.setState({
      operator: value,
      previousValue: !previousValue
        ? currentValue
        : executeOperation(currentValue, previousValue, value).currentValue,
      currentValue: '0',
      tempDisplay: currentValue,
      isEqual: false,
    });
    // }
  }

  handleNumber(value) {
    const { currentValue, isEqual } = this.state;
    if (currentValue === '0' || isEqual) {
      return this.setState({
        currentValue: `${value}`,
        tempDisplay: null,
        isClear: false,
        isEqual: false,
      });
    }

    if (currentValue.length >= 9) {
      return;
    }

    this.setState({
      currentValue: `${currentValue}${value}`,
      tempDisplay: null,
      isClear: false,
      sEqual: false,
    });
  }

  handleEqual() {
    const { currentValue, previousValue, operator } = this.state;
    this.setState({
      ...executeOperation(currentValue, previousValue, operator),
      operator: null,
      previousValue: null,
      tempDisplay: null,
      isEqual: true,
    });
  }

  render() {
    const { currentValue, tempDisplay, isClear, operator } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={[styles.value, resizeFont(tempDisplay || currentValue)]}>
            {convertValue(tempDisplay || currentValue)}
          </Text>
          <View style={styles.row}>
            <Button
              text={isClear ? 'AC' : 'C'}
              theme="secondary"
              onPress={() => this.onTapButton('clear')}
            />
            <Button
              text="+/_"
              theme="secondary"
              onPress={() => this.onTapButton('posneg')}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.onTapButton('percentage')}
            />
            <Button
              text="÷"
              textStyle={styles.textMulti}
              onPress={() => this.onTapButton('operator', '/')}
              theme={operator === '/' ? 'accentActive' : 'accent'}
            />
          </View>
          <View style={styles.row}>
            <Button text="7" onPress={() => this.onTapButton('number', 7)} />
            <Button text="8" onPress={() => this.onTapButton('number', 8)} />
            <Button text="9" onPress={() => this.onTapButton('number', 9)} />
            <Button
              text="×"
              textStyle={styles.textMulti}
              onPress={() => this.onTapButton('operator', '*')}
              theme={operator === '*' ? 'accentActive' : 'accent'}
            />
          </View>
          <View style={styles.row}>
            <Button text="4" onPress={() => this.onTapButton('number', 4)} />
            <Button text="5" onPress={() => this.onTapButton('number', 5)} />
            <Button text="6" onPress={() => this.onTapButton('number', 6)} />
            <Button
              text="−"
              textStyle={styles.textMulti}
              theme={operator === '-' ? 'accentActive' : 'accent'}
              onPress={() => this.onTapButton('operator', '-')}
            />
          </View>
          <View style={styles.row}>
            <Button text="1" onPress={() => this.onTapButton('number', 1)} />
            <Button text="2" onPress={() => this.onTapButton('number', 2)} />
            <Button text="3" onPress={() => this.onTapButton('number', 3)} />
            <Button
              text="+"
              textStyle={styles.textMulti}
              theme={operator === '+' ? 'accentActive' : 'accent'}
              onPress={() => this.onTapButton('operator', '+')}
            />
          </View>
          <View style={[styles.row, { marginBottom: 10 }]}>
            <Button
              text="0"
              size="double"
              onPress={() => this.onTapButton('number', 0)}
            />
            <Button text="." onPress={() => this.onTapButton()} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.onTapButton('equal')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;
