import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTab from './bottomTabNavigation'
import ProductDetails from '../ProductScreen'
import RazorPay from '../razorPay';


  
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
      {/* <Home /> */}
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="RazorPay" component={RazorPay} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default Router;
