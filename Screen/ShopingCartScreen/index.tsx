import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Button from '../../Components/Button';
import CartProductItem from '../../Components/CartProductitem';
import products from '../../data/cart';

const ShopingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  return (
    <View style={styles.homeScreen}>
      
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        ListHeaderComponent={() =>(
            <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({products.length} items) :
          <Text style={{color: '#e74911', fontWeight: 'bold'}}>
            {' '}
            ${totalPrice.toFixed(2)}
          </Text>
        </Text>
        <Button
          text="checkOut"
          onPress={() => console.warn('go to checkOut')}
          containerStyles={{backgroundColor:'#f7e300', borderColor:'#f7e300'}}
        />
      </View>
        )}
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
export default ShopingCartScreen;
