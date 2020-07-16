import { View, Picker, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const DisabilityPicker = ({ onValueChange }) => {
  return (
    <View style={styles.container}>
      <Picker
        // selectedValue={selectedValue}
        style={{ height: 50 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        onValueChange={onValueChange}
      >
        <Picker.Item label='Disabled' value='Disabled' />
        <Picker.Item label='Yes' value='Yes' />
        <Picker.Item label='No' value='No' />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});

export default DisabilityPicker;

/* import React, { Component, useState } from 'react';
import { Picker } from 'native-base';

export default class DisabilityPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key0',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return (
      <Picker
        note
        mode='dropdown'
        style={{
          height: 48,
          borderRadius: 5,
          overflow: 'hidden',
          backgroundColor: 'white',
          marginTop: 10,
          marginBottom: 5,
          marginLeft: 30,
          marginRight: 30,
          paddingLeft: 16,
          paddingTop: 10,
        }}
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this)}
      >
        <Picker.Item label='Disabled' value='key0' />
        <Picker.Item label='Yes' value='key1' />
        <Picker.Item label='No' value='key2' />
      </Picker>
    );
  }
} */
