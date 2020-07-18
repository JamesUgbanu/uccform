import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Container, Content, Title, Picker } from 'native-base';
import { firebase } from '../../firebase/config';
import styles from './styles';
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
  const [familyIncome, setFamilyIncome] = useState('');
  const [education, setEducation] = useState('');
  const [housing, setHousing] = useState('');
  const [energyAssistance, setEnergyAssistance] = useState('');
  const [income, setIncome] = useState('');

  const [entities, setEntities] = useState([]);

  const entityRef = firebase.firestore().collection('ucc-form');

  useEffect(() => {
    entityRef.orderBy('createdAt', 'desc').onSnapshot(
      (querySnapshot) => {
        const newEntities = [];
        querySnapshot.forEach((doc) => {
          const entity = doc.data();
          entity.id = doc.id;
          newEntities.push(entity);
        });
        setEntities(newEntities);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const onSubmitPress = () => {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      fullName,
      email,
      streetAddress,
      telephone,
      street,
      city,
      zipCode,
      emergencyContact,
      relationship,
      address,
      phoneNumber,
      gender,
      maritalStatus,
      disabled,
      veteran,
      ethnicity,
      familyType,
      familyIncome,
      education,
      housing,
      energyAssistance,
      income,
      // authorID: userID,
      createdAt: timestamp,
    };
    entityRef
      .add(data)
      .then((_doc) => {
        setEntityText('');
        Keyboard.dismiss();
      })
      .catch((error) => {
        alert(error);
      });
  };

  // alert(gender);
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

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
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
            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={maritalStatus}
                onValueChange={(value) => setMaritalStatus(value)}
              >
                <Picker.Item label='Marital Status' value='Marital Status' />
                <Picker.Item label='M' value='M' />
                <Picker.Item label='W' value='W' />
                <Picker.Item label='D' value='D' />
                <Picker.Item label='S' value='S' />
              </Picker>
            </View>
            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={disabled}
                onValueChange={(value) => setDisabled(value)}
              >
                <Picker.Item label='Disabled' value='Disabled' />
                <Picker.Item label='Yes' value='Yes' />
                <Picker.Item label='No' value='No' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={veteran}
                onValueChange={(value) => setVeteran(value)}
              >
                <Picker.Item label='Veteran' value='Veteran' />
                <Picker.Item label='Yes' value='Yes' />
                <Picker.Item label='No' value='No' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={ethnicity}
                onValueChange={(value) => setEthnicity(value)}
              >
                <Picker.Item label='Ethnicity' value='Ethnicity' />
                <Picker.Item label='Black' value='Black' />
                <Picker.Item label='White' value='White' />
                <Picker.Item label='Hispanic' value='Hispanic' />
                <Picker.Item label='Native America' value='Native America' />
                <Picker.Item label='Asian' value='Asian' />
                <Picker.Item label='Other' value='Other' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={familyType}
                onValueChange={(value) => setFamilyType(value)}
              >
                <Picker.Item label='Family Type' value='Family Type' />
                <Picker.Item
                  label='Single Parent Female'
                  value='Single Parent Female'
                />
                <Picker.Item
                  label='Single Parent Male'
                  value='Single Parent Male'
                />
                <Picker.Item label='Two Parent' value='keTwo Parent' />
                <Picker.Item label='Single Adult' value='Single Adult' />
                <Picker.Item label='Over 18 of Age' value='Over 18 of Age' />
                <Picker.Item label='Children(s)' value='Children(s)' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={familyIncome}
                onValueChange={(value) => setFamilyIncome(value)}
              >
                <Picker.Item label='Family Income' value='Family Income' />
                <Picker.Item label='Employment' value='Employment' />
                <Picker.Item label='S.S.I' value='S.S.I' />
                <Picker.Item label='Social Security' value='Social Security' />
                <Picker.Item label='Unemployment' value='Unemployment' />
                <Picker.Item label='G.A' value='G.A' />
                <Picker.Item label='Zero Income' value='Zero Income' />
                <Picker.Item label='Others' value='Others' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={education}
                onValueChange={(value) => setEducation(value)}
              >
                <Picker.Item label='Education' value='Education' />
                <Picker.Item label='0 - 8 Grade' value='0 - 8 Grade' />
                <Picker.Item label='9 - 12 Non Grad' value='9 - 12 Non Grad' />
                <Picker.Item label='12+' value='12+' />
                <Picker.Item label='High School' value='High School' />
                <Picker.Item label='GED' value='GED' />
                <Picker.Item label='Some College' value='Some College' />
                <Picker.Item label='2 - 4 College' value='2 - 4 College' />
                <Picker.Item label='4+ College' value='4+ College' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={housing}
                onValueChange={(value) => setHousing(value)}
              >
                <Picker.Item label='Housing' value='Housing' />
                <Picker.Item label='Rent' value='Rent' />
                <Picker.Item label='Owner' value='Owner' />
                <Picker.Item label='Other' value='Other' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={energyAssistance}
                onValueChange={(value) => setEnergyAssistance(value)}
              >
                <Picker.Item label='Energy Assistance' value='key0' />
                <Picker.Item label='LIHEAP/USF ' value='key1' />
                <Picker.Item label='Page' value='key2' />
              </Picker>
            </View>

            <View
              style={{
                flex: 1,
                paddingTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Picker
                style={{ height: 50 }}
                selectedValue={income}
                onValueChange={(value) => setIncome(value)}
              >
                <Picker.Item label='Income' value='Income' />
                <Picker.Item label='Weekly ' value='Weekly' />
                <Picker.Item label='Bi-weekly' value='Bi-weekly' />
                <Picker.Item label='Monthly' value='Monthly' />
                <Picker.Item label='Yearly' value='Yearly' />
              </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={onSubmitPress}>
              <Title>Submit</Title>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </Content>

      <FooterTab />
    </Container>
  );
}
