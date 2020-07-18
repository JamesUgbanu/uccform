import React from 'react';
import { Text} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { useNavigation  } from '@react-navigation/native';
import { firebase } from '../firebase/config'

export default function FooterFuction()  {
  const navigation = useNavigation()
    const onSignOutPress = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
              forceUpdate();
              //navigation.navigate('Login')
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
            <Button vertical>
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