import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: string;
    options: string;
    items: {
      id: string;
      title: string;
      image: string;
      avgRating: Number;
      rating: number;
      price: number;
      oldPrice: number;
    };
  };
}
const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.container}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.ratting}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color="#e47911"
                key={`${item.id}-${i}`}
              />
            ))}

            <Text>1300</Text>
          </View>
          <Text style={styles.price}>
            From Rs {item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}>Rs {item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      
      <View style={styles.quantityContainer}>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>
    </View>
  );
};

export default CartProductItem;
