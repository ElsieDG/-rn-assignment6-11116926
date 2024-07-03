import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'TenorSans-Regular': require('./assets/Tenor_Sans/TenorSans-Regular.ttf')
  });
};
const Stack = createStackNavigator();


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }


  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen style={styles.container} 
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen style={styles.container} 
      name="CartScreen"
      component={CartScreen}
      options={{ headerShown: false, title: 'CheckOut' }}
    />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',   
  },
  text:{
    fontFamily: 'TenorSans-Regular',
  },
});
