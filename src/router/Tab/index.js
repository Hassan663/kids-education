import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Welcome from '../../pages/Welcome/Welcome';
import Menu from '../../pages/Menu/Menu';
import Level from '../../pages/Level/Level';
import MainScreen from '../../pages/MainScreen/MainScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Welcome'
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Level" component={Level} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}
