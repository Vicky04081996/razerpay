import React,{useState} from 'react'
import { Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import styles from './styles'
import product from '../../data/product'
import QuantitySelector from '../../Components/QuantitySelector';
import Button from '../../Components/Button';
import ImageCarousel from '../../Components/ImageCarousel';
import {useNavigation} from '@react-navigation/native'

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    
    const [ quantity, setQuantity] = useState(1)
    console.warn(selectedOption)
    const navigation = useNavigation();
    const BuyNow = () => {
        navigation.navigate('RazorPay')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>

            <ImageCarousel images={product.images} />
            
            <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                {product.options.map(option =>(
                    <Picker.Item label={option} value={option} />
                ))}
            </Picker> 


        <Text style={styles.price}>
          From Rs {product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}>Rs {product.oldPrice}</Text>
          )}
        </Text>
        <Text style={styles.description}>{product.description} </Text>

        <QuantitySelector  quantity={quantity} setQuantity={setQuantity} />
        <Button text={'Add To Card'} onPress={() =>{console.warn('Added')}}  containerStyles={{backgroundColor:'#e3c905'}}/>
        <Button text={'Buy Now'} onPress={BuyNow}  />
        </View>
    )
}

export default ProductScreen

