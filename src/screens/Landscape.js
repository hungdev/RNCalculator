import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/styles';
import Button from '../components/Button';
import template from './LandscapeTemplate';

function Landscape(props) {
  return (
    <View style={styles.landscapeWarpContent}>
      <Text style={[styles.value, { fontSize: 40 }]}>0</Text>
      <View style={styles.landscapeContainer}>
        {template().map(e => (
          <Button
            key={e.id}
            text={e.text}
            size={e.size}
            type="ls"
            theme={e.theme}
            onPress={() => {}}
            screen={props.screen}
          />
        ))}
      </View>
    </View>
  );
}

Landscape.propTypes = {};

export default Landscape;
