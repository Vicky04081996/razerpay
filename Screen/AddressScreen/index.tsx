import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../../Components/Button'

const countries = countryList.getData();

import styles from './styles';

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullName, setFullName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [city, setCity] = useState('');

  const onCheckout =() => {
      if(!fullName){
         Alert.alert('Please enter Full Name');
         return;
      }
      if(!number){
          if(number.length != 10){
            Alert.alert('Please enter valid Phone Number');
          }
        Alert.alert('Please enter Phone Number');
        return;
     }

      console.warn('Success')
  }
  const validateAddress = () => {
    if(!!addressError){
      Alert.alert('Fix all field errors before submiting')
    }
    if(address.length < 3){
      setAddressError('Address is to Short')
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text style={styles.label}>Select Country</Text>
        <Picker selectedValue={country} onValueChange={setCountry}>
          {countries.map(country => (
            <Picker.Item
              value={country.code}
              label={country.name}
              key={country.code}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChange={setFullName}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={number}
          onEndEditing={validateAddress}
          onChange={setNumber}
          keyboardType={'phone-pad'}
        />
      </View>

    
      <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address}
          onChange={text => {setAddress(text); setAddressError('')}}
        />
        {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          value={city}
          onChange={setCity}
        />
      </View>

        <Button text="Checkout" onPress={onCheckout} />

    </View>
  );
};

export default AddressScreen;
