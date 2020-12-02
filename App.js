import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import RedScreen from './screens/RedScreen';
import BlueScreen from './screens/BlueScreen';
import YellowScreen from './screens/YellowScreen';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['https://mychat.com', 'mychat://'],
  config: {
    screens: {
      RedScreen: '/red',
      BlueScreen: '/blue',
      YellowScreen: '/yellow',
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="RedScreen" component={RedScreen} />
        <Stack.Screen name="BlueScreen" component={BlueScreen} />
        <Stack.Screen name="YellowScreen" component={YellowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
