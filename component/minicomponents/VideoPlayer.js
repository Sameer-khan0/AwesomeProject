import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const MyVideoScreen = () => {
  // Replace with a valid video URL
  const videoUrl = 'https://www.pexels.com/videos/ocean-waves-1033610/';

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        controls={true}
        onError={(error) => console.error(error)} // Handle video loading errors (optional)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default MyVideoScreen;
