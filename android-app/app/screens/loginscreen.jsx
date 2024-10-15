import React from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';

const LoginScreen = ({ navigation }) => {
  return (
    <View className="p-4">
      <Text className="text-2xl mb-4">Login</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

export default styled(LoginScreen);
