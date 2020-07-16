import { View, Picker, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const MaritalPicker = ({ onValueChange }) => {
  // const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        // selectedValue={selectedValue}
        style={{ height: 50 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        onValueChange={onValueChange}
      >
        <Picker.Item label='Marital Status' value='Marital Status' />
        <Picker.Item label='M' value='M' />
        <Picker.Item label='W' value='W' />
        <Picker.Item label='D' value='D' />
        <Picker.Item label='S' value='S' />
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

export default MaritalPicker;

/* 
import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class MaritalPicker extends Component {
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
        <Picker.Item label='Marital Status' value='key0' />
        <Picker.Item label='M' value='key1' />
        <Picker.Item label='W' value='key2' />
        <Picker.Item label='D' value='key3' />
        <Picker.Item label='S' value='key4' />
      </Picker>
    );
  }
}
 */
