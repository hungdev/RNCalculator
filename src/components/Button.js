import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

export default function Button(props) {
  const { size, theme, text, onPress, style, textStyle } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        size === 'double' && styles.buttonDouble,
        theme === 'secondary' && styles.buttonSecondary,
        theme === 'accent' && styles.buttonAccent,
        theme === 'accentActive' && styles.buttonAccentActive,
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
});
