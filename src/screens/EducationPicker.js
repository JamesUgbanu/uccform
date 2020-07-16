import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class EducationPicker extends Component {
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
        <Picker.Item label='Education' value='key0' />
        <Picker.Item label='0 - 8 Grade' value='key1' />
        <Picker.Item label='9 - 12 Non Grad' value='key2' />
        <Picker.Item label='12+' value='key3' />
        <Picker.Item label='High School' value='key4' />
        <Picker.Item label='GED' value='key5' />
        <Picker.Item label='Some College' value='key6' />
        <Picker.Item label='2 - 4 College' value='key7' />
        <Picker.Item label='4+ College' value='key8' />
      </Picker>
    );
  }
}
