import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class FamilyIncomePicker extends Component {
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
        <Picker.Item label='Family Income' value='key0' />
        <Picker.Item label='Employment' value='key1' />
        <Picker.Item label='S.S.I' value='key2' />
        <Picker.Item label='Social Security' value='key3' />
        <Picker.Item label='Unemployment' value='key4' />
        <Picker.Item label='G.A' value='key5' />
        <Picker.Item label='Zero Income' value='key6' />
        <Picker.Item label='Others' value='key7' />
      </Picker>
    );
  }
}
