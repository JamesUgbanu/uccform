import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { firebase } from '../firebase/config'

export default function FooterFuction({navigation})  {
    console.warn(navigation)
    const onSignOutPress = () => {
        firebase
            .auth()
            .signOut()
            .then(() => navigation.navigate('Login'))
            .catch(error => {
                
                alert(error)
            })
    }
    return (
<Footer>
<FooterTab>
            <Button vertical>
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