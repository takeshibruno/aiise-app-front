import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import Login from "../screens/Login";
import Inicio from "../screens/Inicio";

// Create a stack navigator
const Stack = createStackNavigator();

// Define the navigation stack
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
