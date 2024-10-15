import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';

function Cart({ closeCart, cartItems, delCart }) {
  const navigation = useNavigation();

  const handleCheckout = () => {
    navigation.navigate('Checkout'); // Use 'Checkout' as your route name in react-navigation
  };

  return (
    <View className ='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <View className= 'bg-white p-6 rounded-lg shadow-lg w-80'>
        <View className='flex-row justify-end'>
          <TouchableOpacity onPress={closeCart}>
            <Text className='text-gray-600 text-xl'>×</Text>
          </TouchableOpacity>
        </View>
        <Text className='text-xl font-semibold mb-4'>Your Items</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item , index) => index.toString()}
          renderItem={({ item , index }) => (
            <View className='flex-row justify-between mb-2'>
              <View className='flex-row items-center'>
                <Image
                  source={{ uri: item.image }}
                  className='w-12 h-12 mr-2'
                  resizeMode="cover"
                />
                <Text>{`${item.name} - $${item.price}`}</Text>
              </View>
              <TouchableOpacity onPress={() => delCart(index)}>
                <Text className='text-red-500 text-lg'>×</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity
          className='mt-4 py-2 px-4 bg-blue-500 rounded-md'
          onPress={handleCheckout}
        >
          <Text className='text-white text-center'>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default styled(Cart);
