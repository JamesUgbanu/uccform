import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import FooterTab from '../Footer'

export default function ProfileScreen({ extraData, userState }) {

  return (
    <Container>
      <Content>
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps='always'
      >
         <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.name}>{extraData.fullName}</Text>
              <Text style={styles.info}>{extraData.email}</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity> */}
            </View>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </View>
    </Content>
    <FooterTab user={userState} />
    </Container>
  );
}
