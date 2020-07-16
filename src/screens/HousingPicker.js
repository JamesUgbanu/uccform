import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class HousingPicker extends Component {
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
        <Picker.Item label='Housing' value='key0' />
        <Picker.Item label='Rent' value='key1' />
        <Picker.Item label='Owner' value='key2' />
        <Picker.Item label='Other' value='key3' />
      </Picker>
    );
  }
}
