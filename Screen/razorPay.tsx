import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';



const razorPay = () => {
    const onPress =() => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://vickyaryan.com/img/avatar.jpg',
            currency: 'INR',
            key: 'rzp_test_Ea8ipsclVL6hBH', // Your api key
            amount: '5000',
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
    }
    return (
            <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>Pay</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth:2,
        borderColor: '#d97818'
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
})

export default razorPay
