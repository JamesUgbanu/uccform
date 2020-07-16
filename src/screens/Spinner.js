import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';


export default class SpinnerClass extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Spinner color='blue' />
        </Content>
      </Container>
    );
  }
}