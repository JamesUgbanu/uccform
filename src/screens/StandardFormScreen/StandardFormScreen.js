import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Container, Content, Title, Picker } from 'native-base';
import Expo from "expo";
import styles from './styles';
import Date from '../Date';
import MaritalPicker from '../../screens/MaritalStatusPicker';
import DisablePicker from '../../screens/DisabilityPicker';
import VeteranPicker from '../../screens/VeteranPicker';
import EthnicityPicker from '../EthnicityPicker';
import FamilyTypePicker from '../FamilyTypePicker';
import FamilyIncomePicker from '../FamilyIncomePicker';
import EducationPicker from '../EducationPicker';
import HousingPicker from '../HousingPicker';
import EnergyAssistancePicker from '../EnergyAssistancePicker';
import IncomePicker from '../IncomePicker';
import FooterTab from '../Footer';

export default function StandardFormScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [relationship, setRelationship] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [disabled, setDisabled] = useState('');
  const [veteran, setVeteran] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [familyType, setFamilyType] = useState('');

  alert(gender)
  /*  const DisablePicker = (value) => {
    alert(value);
  }; */
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps='always'
          >
            <TextInput
              style={styles.input}
              placeholder='Full Name'
              placeholderTextColor='#aaaaaa'
              onChangeText={(text) => setFullName(text)}
              value={fullName}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
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
              placeholder='Street Address'
              onChangeText={(text) => setStreetAddress(text)}
              value={streetAddress}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='Telephone'
              onChangeText={(text) => setTelephone(text)}
              value={telephone}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='Street'
              onChangeText={(text) => setStreet(text)}
              value={street}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='City'
              onChangeText={(text) => setCity(text)}
              value={city}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='Zip Code'
              onChangeText={(text) => setZipCode(text)}
              value={zipCode}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='Emergency Contact'
              onChangeText={(text) => setEmergencyContact(text)}
              value={emergencyContact}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='Relationship'
              onChangeText={(text) => setRelationship(text)}
              value={relationship}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='Address'
              onChangeText={(text) => setAddress(text)}
              value={address}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholderTextColor='#aaaaaa'
              placeholder='Phone Number'
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />

          <View style={{flex: 1, paddingTop: 10, marginLeft: 30,marginRight: 30,}}>
                <Picker
                  style={{ height: 50 }}
                  selectedValue={gender}
                  onValueChange={(value) => setGender(value)}
                >
                  <Picker.Item label='Select Gender' value='Select Gender' />
                  <Picker.Item label='Male' value='Male' />
                  <Picker.Item label='Female' value='Female' />
                </Picker>
              </View>
            {/* <MaritalPicker
              onValueChange={(itemValue, itemIndex) =>
                setMaritalStatus(itemValue)
              }
            />
            <DisablePicker
              onValueChange={(itemValue, itemIndex) => setDisabled(itemValue)}
            />
            <VeteranPicker
              onValueChange={(itemValue, itemIndex) => setVeteran(itemValue)}
            />

            <EthnicityPicker
              onValueChange={(itemValue, itemIndex) => setEthnicity(itemValue)}
            />

            <FamilyTypePicker
              onValueChange={(itemValue, itemIndex) => setFamilyType(itemValue)}
            /> */}

            {/* <SexPicker />
            <MaritalPicker />
            <DisablePicker />
            <VeteranPicker />
            <EthnicityPicker />
            <FamilyTypePicker />
            <FamilyIncomePicker />
            <EducationPicker />
            <HousingPicker />
            <EnergyAssistancePicker />
            <IncomePicker />
            <Date /> */}
            <TouchableOpacity style={styles.button}><Title>Submit</Title></TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </Content>

      <FooterTab />
    </Container>
  );
}
