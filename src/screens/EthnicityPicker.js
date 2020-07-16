import { View, Picker, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const EthnicityPicker = ({ onValueChange }) => {
  return (
    <View style={styles.container}>
      <Picker style={{ height: 50 }} onValueChange={onValueChange}>
        <Picker.Item label='Ethnicity' value='Ethnicity' />
        <Picker.Item label='Black' value='Black' />
        <Picker.Item label='White' value='White' />
        <Picker.Item label='Hispanic' value='Hispanic' />
        <Picker.Item label='Native America' value='Native America' />
        <Picker.Item label='Asian' value='Asian' />
        <Picker.Item label='Other' value='Other' />
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

export default EthnicityPicker;

/* import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class EthnicityPicker extends Component {
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
        <Picker.Item label='Ethnicity' value='key0' />
        <Picker.Item label='Black' value='key1' />
        <Picker.Item label='White' value='key2' />
        <Picker.Item label='Hispanic' value='key3' />
        <Picker.Item label='Native America' value='key4' />
        <Picker.Item label='Asian' value='key5' />
        <Picker.Item label='Other' value='key6' />
      </Picker>
    );
  }
}
 */
