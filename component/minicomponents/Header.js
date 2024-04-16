import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation=useNavigation()

  return (
    <View className=" flex justify-between flex-row gap-2 text-lg" >
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >
        <Text className=' text-yellow-100 font-semibold' >Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')} >
        <Text className=' text-yellow-100 font-semibold' >About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contect')} >
        <Text className=' text-yellow-100 font-semibold' >Contect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
