// screens/AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
        justo ac nulla congue viverra. In at elit a dolor vestibulum placerat.
        Proin eget magna eu nunc dapibus blandit. Vestibulum id risus sed
        purus congue laoreet vitae vel justo. Fusce rhoncus velit vel nisl
        tristique consectetur. Sed vitae turpis eu tortor efficitur mattis. Sed
        ultricies leo a enim blandit faucibus. Proin convallis turpis at justo
        fringilla vehicula. Aliquam erat volutpat. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus
        pretium nisi nec tortor venenatis, vitae condimentum urna interdum.
        Duis consequat lorem sed mi egestas, non ullamcorper mauris fermentum.
        Integer sit amet justo sed libero feugiat condimentum. Sed id erat ut
        ipsum rutrum tincidunt.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

  
export default AboutScreen;
