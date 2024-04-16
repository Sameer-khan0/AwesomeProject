import React, { useState, useEffect } from "react";
import { ScrollView, Button, Text, View, TouchableOpacity, Image } from "react-native";
import Nav from './minicomponents/Header'
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {API_KEY} from "@env"

export default function Home() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyapi.io/data/v1/user', {
        headers: {
          'app-id': API_KEY
        }
      });
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const fetchUser = async (id) => {
    try {
      const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          'app-id': API_KEY
        }
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigation=useNavigation()

  return (
    <View className=' flex justify-between h-full w-full gap-2' >
      {/* <Nav/> */}
      <View  className='h-[50%] bg-slate-100 flex justify-center items-center' >
        <View className=' w-[80%] h-[50%] p-3 bg-yellow-300 rounded-xl shadow-2xl shadow-black/40'>

        {user && (
          <>
          <View className=' w-full h-[80%] shadow-3xl shadow-black flex justify-center items-center absolute top-[-30px] left-3 z-10'>
            <Image
            style={{width:'100%' ,height:'100%', objectFit:"cover"}}
            className=' rounded-xl'
            source={{ uri: user.picture }}
            />
          </View>
            <Text className=' absolute bottom-1 text-violet-500 text-center text-2xl font-bold w-full h-[30%]' >{`${user.firstName} ${user.lastName}`}</Text>
          </>
        )}

        </View>
        <Button color="#ff0000"  title="Press Me" onPress={() => navigation.navigate('Contect')} />
      </View>
      <View className='h-[50%] p-2 bg-slate-200' >
        <Text className=' text-lg font-semibold flex felx-col text-violet-500 text-center pb-2' >Users</Text>
        <ScrollView className=' flex gap-1' >
          {users.map((user) => (
              <View key={user.id} className=' w-full h-8 p-1 bg-white shadow-md shadow-black border-2 border-gray-100 rounded-md' >
            <TouchableOpacity key={user.id} onPress={() => fetchUser(user.id)}>
              <Text>{`${user.title} ${user.firstName} ${user.lastName}`}</Text>
            </TouchableOpacity>
              </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const style={
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
}