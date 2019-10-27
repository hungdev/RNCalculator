import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { isIphoneX } from '../screens/Utils';
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;
const buttonLsWidth = screen.width / 10;

export default function Button(props) {
  console.log('ix', isIphoneX());
  const { size, theme, text, onPress, style, textStyle, type } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        size === 'double' && styles.buttonDouble,
        theme === 'secondary' && styles.buttonSecondary,
        theme === 'accent' && styles.buttonAccent,
        theme === 'accentActive' && styles.buttonAccentActive,
        type === 'ls' && styles.buttonLs,
        size === 'lsDouble' && styles.buttonLsDouble,
        theme === 'lsSecondary' && styles.buttonSecondary,
        theme === 'lsAccent' && styles.buttonAccent,
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          theme === 'accentActive' && styles.textAccentActive,
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    color: '#060606',
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
  buttonAccentActive: {
    backgroundColor: '#fff',
  },
  textAccentActive: {
    color: '#f09a36',
  },
  buttonLs: {
    backgroundColor: '#333333',
    flex: 0,
    height: Math.floor(buttonLsWidth - (isIphoneX() ? 35 : 30)),
    width: Math.floor(buttonLsWidth - (isIphoneX() ? 20 : 10)),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonLsWidth),
    margin: 5,
  },
  buttonLsDouble: {
    width: screen.width / 5 - (isIphoneX() ? 30 : 10),
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: isIphoneX() ? 20 : 10,
  },
  buttonLsSecondary: {
    color: '#060606',
    backgroundColor: '#a6a6a6',
  },
  buttonLsAccent: {
    backgroundColor: '#f09a36',
  },
});
