import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    // root: {
    //   flexDirection: 'row',
    //   width: '95%',
    //   borderWidth: 1,
    //   borderColor: '#d1d1d1',
    //   borderRadius: 10,
    //   backgroundColor: '#fff',
    //   padding: 5,
    //   marginVertical: 5,
    // },
    image: {
      height: 150,
      flex: 2,
    },
    container: {
      padding: 10,
      backgroundColor: '#fff'
    },
    title: {
      fontSize: 18,
    },
    // ratting: {
    //   flexDirection: 'row',
    //   paddingVertical: 5,
    //   alignItems: 'center',
    // },
    // star: {
    //   margin: 3,
    // },
    description:{
      fontSize:16,
      textAlign: 'justify',
      letterSpacing:0.8,
      lineHeight:20,
      marginVertical: 10
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
  });
  
  export default styles;