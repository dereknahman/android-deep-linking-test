import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BlueScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Blue Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default BlueScreen;
