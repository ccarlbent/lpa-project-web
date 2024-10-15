import React from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';

const CartScreen = ({ navigation }) => {
  return (
    <View className="p-4">
      <Text className="text-2xl mb-4">Cart</Text>
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default styled(CartScreen);
