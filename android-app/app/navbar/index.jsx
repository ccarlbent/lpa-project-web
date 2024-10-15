import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome icons from react-native-vector-icons
import Signup from '../signup/index'; // Assuming you have a Signup component for React Native
import { styled } from 'nativewind'; // Tailwind for styling

const menuBar1 = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'About', link: '/#' },
  { id: 3, name: 'Contact', link: '/#' },
  { id: 4, name: 'Blog', link: '/#' }
];

const categories = [
  { id: 1, name: 'Nike', link: '/#' },
  { id: 2, name: 'Adidas', link: '/#' },
  { id: 3, name: 'Reebok', link: '/#' },
  { id: 4, name: 'Tommy Hilfiger', link: '/#' },
  { id: 5, name: 'Puma', link: '/#' }
];

function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const handleClose = () => {
    setShowSignup(false);
  };

  return (
    <View className='bg-white shadow-lg py-4 px-6'>
      <View className='flex flex-row justify-between items-center'>
        {/** LOGO */}
        <Text className='font-bold text-3xl'>LPA</Text>

        {/** Menubar */}
        <View className='flex flex-row items-center gap-4'>
          <FlatList
            data={menuBar1}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text className='text-xl font-semibold px-3'>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />

          {/** Dropdown */}
          <TouchableOpacity
           className='flex flex-row items-center'
            onPress={() => setShowCategories(!showCategories)}
          >
            <Text className='text-xl font-semibold'>Category</Text>
            <Icon name="angle-down" size={20} className='ml-2' />
          </TouchableOpacity>

          {/** Login Button */}
          <TouchableOpacity
           className='flex flex-row items-center gap-2 bg-secondary h-10 px-5 py-2 rounded-md '
            onPress={() => setShowSignup(true)}
          >
            <Icon name="user" size={24} color="white" />
            <Text className='text-white text-xl '>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/** Categories Dropdown */}
      {showCategories && (
        <View className='bg-white absolute z-10 top-20 left-6 right-6 shadow-md p-4 '>
          {categories.map((category) => (
            <TouchableOpacity key={category.id}>
              <Text className='text-sm'>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/** Signup Modal */}
      <Modal visible={showSignup} transparent={true} animationType="slide">
        <Signup onClose={handleClose} />
      </Modal>
    </View>
  );
}

export default styled(Navbar);
