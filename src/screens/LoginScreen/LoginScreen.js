import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Toast } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config';
import styles from './styles';
import Spinner from '../Spinner';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            setLoading(false);
            if (!firestoreDocument.exists) {
              Toast.show({
                text: 'User does not exist anymore.',
                buttonText: 'Okay',
                type: "danger",
                position: "top",
                duration: 5000
              })
              return;
            }
            const user = firestoreDocument.data();
          })
          .catch((error) => {
            setLoading(false);
            Toast.show({
              text: error,
              buttonText: 'Okay',
              type: "danger",
              position: "top",
              duration: 5000
            })
            console.log(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        Toast.show({
          text: 'Wrong email or password!',
          buttonText: 'Okay',
          type: "danger",
          position: "top",
          duration: 5000
        })
        console.log(error);
      });
  };
  if (isLoading) {
    return (
      <Spinner
        style={{ alignSelf: 'center', marginTop: '35%' }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps='always'
      >
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor='#aaaaaa'
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='#aaaaaa'
          secureTextEntry
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
