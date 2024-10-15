import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styled } from 'nativewind'; // Using twrnc for Tailwind CSS
import { useNavigation } from '@react-navigation/native'; // For navigation

function Login() {
  const navigation = useNavigation(); // React Native's navigation hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    // Navigate to the 'Login' screen (adjust to your desired screen)
    navigation.navigate('pagelayout2/index');
  };

  return (
    <View className='flex justify-center py-11 items-center'>
      <View className='bg-blue-300 bg-opacity-40 text-center p-6 rounded-lg shadow-lg w-96'>
        <Text className='text-xl font-semibold mb-4'>Login Form</Text>
        <View>
          <View className='mb-4'>
            <Text className='block text-md font-sm text-gray-700'>Email</Text>
            <TextInput
              className='mt-1 p-2 w-full border rounded-md'
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View className='mb-4'>
            <Text className='block text-md font-sm text-gray-700'>Password</Text>
            <TextInput
              className='mt-1 p-2 w-full border rounded-md'
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <Button
            title="Submit"
            onPress={handleSubmit}
            color="#1E90FF" // For blue button
          />
        </View>
      </View>
    </View>
  );
}

export default styled(Login);
