import { View, Picker, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { render } from 'react-dom';

const FamilyPicker = ({ onValueChange }) => {
  return (
    <View style={styles.container}>
      <Picker style={{ height: 50 }} onValueChange={onValueChange}>
        <Picker.Item label='Family Type' value='Family Type' />
        <Picker.Item
          label='Single Parent Female'
          value='Single Parent Female'
        />
        <Picker.Item label='Single Parent Male' value='Single Parent Male' />
        <Picker.Item label='Two Parent' value='keTwo Parent' />
        <Picker.Item label='Single Adult' value='Single Adult' />
        <Picker.Item label='Over 18 of Age' value='Over 18 of Age' />
        <Picker.Item label='Children(s)' value='Children(s)' />
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

export default FamilyPicker;

/* import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class FamilyPicker extends Component {
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
        <Picker.Item label='Family Type' value='key0' />
        <Picker.Item label='Single Parent Female' value='key1' />
        <Picker.Item label='Single Parent Male' value='key2' />
        <Picker.Item label='Two Parent' value='key3' />
        <Picker.Item label='Single Adult' value='key4' />
        <Picker.Item label='Over 18 of Age' value='key5' />
        <Picker.Item label='Children(s)' value='key6' />
      </Picker>
    );
  }
}
 */
