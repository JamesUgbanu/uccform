import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { decode, encode } from 'base-64';
import { Root } from 'native-base'
// import { Expo } from 'Expo';
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  StandardFormScreen,
  ProfileScreen
} from './src/screens';
import { firebase } from './src/firebase/config';
import Spinner from './src/screens/Spinner'

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  YellowBox.ignoreWarnings(['Setting a timer']);
  YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);

  useEffect(() => {
       Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error)
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  const changeUserState = () => {
        setUser(null)
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Root>
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name='Home'>
              {(props) => <HomeScreen {...props} extraData={user} userState={changeUserState} />}
            </Stack.Screen>
            <Stack.Screen name='Standard Form'>
              {(props) => <StandardFormScreen {...props} extraData={user} userState={changeUserState} />}
            </Stack.Screen>
            <Stack.Screen name='Profile'>
              {(props) => <ProfileScreen {...props} extraData={user}  userState={changeUserState} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Registration' component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </Root>
  );
}
