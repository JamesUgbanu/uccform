import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useNavigation  } from '@react-navigation/native';
import { firebase } from '../firebase/config'

export default function FooterFuction({user})  {
  const navigation = useNavigation()
  
    const onSignOutPress = () => {
      
        firebase
            .auth()
            .signOut()
            .then(() => {
              user()
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
<Footer>
<FooterTab>
            <Button vertical onPress={() => navigation.navigate('Home')}>
              <Icon active name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical onPress={() => onSignOutPress()}>
              <Icon name="settings" />
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
}