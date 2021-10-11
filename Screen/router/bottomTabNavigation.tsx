import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Home'
import ProductDetails from '../ProductScreen'
const Tab = createBottomTabNavigator();

const bottomTabNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={ProductDetails} />
    </Tab.Navigator>
  );
};

export default bottomTabNavigation;
