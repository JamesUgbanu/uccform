import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Container, Text, Button, Content } from 'native-base';
import FooterTab from '../Footer';
import styles from './styles';

export default function HomeScreen({ navigation , userState}) {

  return (
    <Container>
      <Content>
        <View>
          <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps='always'
          >
            <Button
              onPress={() => navigation.navigate('Standard Form')}
              full
              style={{ paddingTop: 50, paddingBottom: 50, marginTop: 20, marginRight: 10, marginLeft: 10, borderRadius: 10 }}
            >
              <Text style={styles.customText}>UCC Standard Form</Text>
            </Button>
            <Button
              full
              style={{ paddingTop: 50, paddingBottom: 50, marginTop: 20, marginRight: 10, marginLeft: 10, borderRadius: 10 }}
            >
              <Text>UCC Standard Form 2</Text>
            </Button>
          </KeyboardAwareScrollView>
        </View>
      </Content>
      <FooterTab user={userState} />
    </Container>
  );
}
