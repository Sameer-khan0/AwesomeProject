import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Define Card component before using it
const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.description}>Description</Text>
    </View>
  );
};

const HorizontalScroll = () => {
  return (
    <View className=" w-full h-full">
      <View className="w-full h-[20%]">
        <ScrollView horizontal className="p-4">
          {/* Render the Card component */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>

      <View className=" w-full h-[80%]">
        <ScrollView className=" w-full grid place-items-center gap-1 pl-2 pr-1">
          {Array.from({ length: 2 }).map((_, index) => (
            <View key={index} className=' w-full h-[300px] bg-slate-200' >
              <View className=' w-full h-full flex justify-center items-center'>
                <ScrollView horizontal >
                   <Text>lorem22</Text> 
                   <Text>lorem22</Text> 
                   <Text>lorem22</Text> 
                </ScrollView>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "pink",
    borderRadius: 8,
    color: "white",
    padding: 20,
    marginRight: 10,
    width: 160, // Set width to control card size
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

export default HorizontalScroll;
