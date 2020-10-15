import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: -16.7440393,
          longitude: -51.5302195,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
