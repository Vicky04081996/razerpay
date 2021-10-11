import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

interface ProductItemProps {
  items: {
    id: string;
    title: string;
    image: string;
    avgRating: Number;
    rating: number;
    price: number;
    oldPrice: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();
const onPress = () => {
  navigation.navigate('ProductDetails')
}

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratting}>
          {[0,0,0,0,0].map((el,i) => (
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
    </Pressable>
  );
};

export default ProductItem;

