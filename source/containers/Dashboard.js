import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calculator from './Calculator';
import Notes from './Notes';

function CalculatorScreen() {
  return <Calculator/>
}

function NotesScreen() {
  return <Notes/>
}

const Tab = createBottomTabNavigator();

export default  Dashboard = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Notes" component={NotesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}