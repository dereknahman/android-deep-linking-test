import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const YellowScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Yellow Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default YellowScreen;
