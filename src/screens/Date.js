import React, { Component } from 'react';
import { DatePicker, View } from 'native-base';
export default class DatePickerClass extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <View style={{ marginLeft: 100 }}>
        <DatePicker
          placeHolderText='Start date'
          textStyle={{ color: 'green' }}
          placeHolderTextStyle={{ color: '#d3d3d3' }}
          onDateChange={this.setDate}
          disabled={false}
        />
      </View>
    );
  }
}
