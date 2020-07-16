import { View, Picker, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const GenderPicker = ({ onValueChange }) => {
  // const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        // selectedValue={selectedValue}
        style={{ height: 50 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        onValueChange={onValueChange}
      >
        <Picker.Item label='Select Gender' value='Select Gender' />
        <Picker.Item label='Male' value='Male' />
        <Picker.Item label='Female' value='Female' />
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

export default GenderPicker;

/* import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class GenderPicker extends Component {
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
        <Picker.Item label='Select Gender' value='key0' />
        <Picker.Item label='Male' value='key1' />
        <Picker.Item label='Female' value='key2' />
      </Picker>
    );
  }
} */

/* import { View, Picker, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const GenderPicker = ({ onValueChange }) => {
  // const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        // selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        onValueChange={onValueChange}
      >
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
});

export default GenderPicker; */
