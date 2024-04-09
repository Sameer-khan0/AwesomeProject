import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  useEffect(()=>{
    alert('grater then 10')
  },[score >= 10])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increaseScore} style={{padding:20}}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setScore(score-1)}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
  },
});
