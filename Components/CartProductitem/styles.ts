import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    root: {
      width: '95%',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 5,
      marginVertical: 5,
      padding: 6,
    },
    row:{
      flexDirection: 'row',
    },
    image: {
      height: 150,
      flex: 2,
    },
    container: {
      padding: 10,
      flex: 3,
    },
    title: {
      fontSize: 18,
    },
    ratting: {
      flexDirection: 'row',
      paddingVertical: 5,
      alignItems: 'center',
    },
    star: {
      margin: 3,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    oldPrice: {
      fontSize: 12,
      fontWeight: 'normal',
      textDecorationLine: 'line-through',
    },
    quantityContainer:{
      margin:5
    }
  });
  
  export default styles;