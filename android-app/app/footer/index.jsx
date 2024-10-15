import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind'; // Using twrnc for Tailwind CSS

function Footer() {
  return (
    <View className='bg-primaryDark flex justify-center py-4'>
      <View className='items-center'>
        <Text className='text-white text-xl'>Footer Info</Text>
      </View>
    </View>
  );
}

export default styled(Footer);
