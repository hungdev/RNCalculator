import React, { Component } from 'react';
import { Text, View, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import styles from './styles/styles';
import { executeOperation } from './Utils';
import Portrait from './Portrait';
import Landscape from './Landscape';

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
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };
    this.state = {
      ...defaultState,
      orientation: isPortrait() ? 'portrait' : 'landscape',
      screen: Dimensions.get('screen'),
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape',
        screen: Dimensions.get('screen'),
      });
    });
  }

  onTapButton = (type, value) => {
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
  };

  handleOperator(value) {
    const { currentValue, previousValue, operator, isEqual } = this.state;
    // if (operator !== value) {
    this.setState({
      operator: value,
      previousValue: !previousValue
        ? currentValue
        : executeOperation(currentValue, previousValue, operator).currentValue,
      currentValue: '0',
      tempDisplay: !previousValue
        ? currentValue
        : executeOperation(currentValue, previousValue, operator).currentValue,
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
    const {
      currentValue,
      tempDisplay,
      isClear,
      operator,
      orientation,
      screen,
    } = this.state;

    return (
      <View
        style={[
          styles.container,
          orientation === 'landscape' ? { justifyContent: 'flex-start' } : {},
        ]}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View>
            {orientation === 'portrait' ? (
              <Portrait
                isClear={isClear}
                tempDisplay={tempDisplay}
                currentValue={currentValue}
                operator={operator}
                onTapButton={this.onTapButton}
                screen={screen}
              />
            ) : (
              <Landscape screen={screen} />
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;
