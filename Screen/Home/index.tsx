import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../Components/Productitem';
import products from '../../data/products'

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
        <FlatList
            data={products}
            renderItem={({item})=> <ProductItem item={item}/>}
            /> 
      
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    width: '100%',
    padding: 10,
  },
  
});
export default HomeScreen;
