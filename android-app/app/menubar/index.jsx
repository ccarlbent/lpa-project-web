import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome icons from react-native-vector-icons
import { styled } from 'nativewind';

function Menubar({ cartItems, openCart }) {
  return (
    <View className='bg-blue-400 shadow-lg'>
      <View className='flex justify-between items-center py-4 sm:py-3'>
        {/** Logo */}
        <Text className='font-bold text-3xl text-white'>LPA</Text>

        {/** Search Bar */}
        <View className='flex flex-row items-center'>
          <TextInput
            className='mt-1 p-2 border rounded-l-md w-64'
            placeholder="Search Here"
          />
          <TouchableOpacity
            className='mt-1 p-3 bg-white text-gray-700 border border-l-0 rounded-r-md flex items-center justify-center'
          >
            <Icon name="search" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            className='ml-4 flex flex-row justify-center items-center gap-2 bg-secondary text-xl h-10 text-white px-5 py-2 hover:scale-105 transition duration-300 ease-in-out rounded-md'
            onPress={openCart}
          >
            <Icon name="shopping-cart" size={24} color="white" />
            <Text>{cartItems.length}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default styled(Menubar);
