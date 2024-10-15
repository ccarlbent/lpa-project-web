import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind'; // Assuming you're using twrnc for Tailwind CSS

function Congrats() {
  const navigation = useNavigation();

  const BackHome = () => {
    navigation.navigate('Login'); // Navigates to the login screen
  };

  return (
    <View className='flex-1 justify-center items-center bg-green-100'>
      <View className='bg-white p-8 rounded-lg shadow-lg w-80 text-center'>
        <Text className='text-3xl font-bold text-green-600 mb-4'>
          Congrats!
        </Text>
        <Text className='text-lg'>Your Payment was Successful</Text>
        <TouchableOpacity
          className='mt-5 py-2 px-4 bg-blue-500 rounded-md '
          onPress={BackHome}
        >
          <Text className='text-white text-center '>Buy Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default styled(Congrats);
