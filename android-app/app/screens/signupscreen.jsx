import React from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';

const SignupScreen = ({ navigation }) => {
  return (
    <View className="p-4">
      <Text className="text-2xl mb-4">Signup</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default styled(SignupScreen);
