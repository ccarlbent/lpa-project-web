import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';

function Checkout() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayNow = () => {
    if (!name || !email || !bankNumber || !expireDate || !cvc) {
      Alert.alert('Please fill all the fields');
      return;
    }

    // Navigate to 'Congrats' screen
    navigation.navigate('Congrats');
  };

  return (
    <View className='flex-1 justify-center items-center bg-gray-200'>
      <View className='bg-blue-400 p-6 rounded-lg shadow-lg w-80'>
        <Text className='text-xl font-semibold mb-4'>Checkout Your Item</Text>
        
        {/* Name */}
        <View className='mb-4'>
          <Text className='text-sm font-medium text-gray-700'>Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            className='mt-1 p-2 bg-white border border-gray-300 rounded-md'
            placeholder="Your Name"
          />
        </View>

        {/* Email */}
        <View className='mb-4'>
          <Text className='text-sm font-medium text-gray-700'>Email Address</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            className='mt-1 p-2 bg-white border border-gray-300 rounded-md'
            placeholder="Your Email"
            keyboardType="email-address"
          />
        </View>

        {/* Bank Number */}
        <View className='mb-4'>
          <Text className='text-sm font-medium text-gray-700'>Card Details</Text>
          <TextInput
            value={bankNumber}
            onChangeText={(text) => setBankNumber(text)}
            className='mt-1 p-2 bg-white border border-gray-300 rounded-md'
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            maxLength={19}
          />
        </View>

        {/* Expiry Date */}
        <View className='mb-4'>
          <Text className='text-sm font-medium text-gray-700'>Expiry Date (MM/YY)</Text>
          <TextInput
            value={expireDate}
            onChangeText={(text) => setExpireDate(text)}
            className='mt-1 p-2 bg-white border border-gray-300 rounded-md'
            placeholder="MM/YY"
            maxLength={5}
            keyboardType="numeric"
          />
        </View>

        {/* CVC */}
        <View className='mb-4'>
          <Text className='text-sm font-medium text-gray-700'>CVC</Text>
          <TextInput
            value={cvc}
            onChangeText={(text) => setCvc(text)}
            className='mt-1 p-2 bg-white border border-gray-300 rounded-md'
            placeholder="123"
            maxLength={3}
            keyboardType="numeric"
          />
        </View>

        {/* Pay Now Button */}
        <TouchableOpacity
          className='mt-4 py-2 px-4 bg-blue-500 rounded-md'
          onPress={handlePayNow}
        >
          <Text className='text-white text-center'>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default styled(Checkout);
