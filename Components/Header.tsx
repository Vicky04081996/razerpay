import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Header = () => {
    return (
        <View style={{top:10}}>
            <TextInput placeholder='Search product' style={{backgroundColor: '#cfd1d4', color: '#000', fontSize: 16,padding:10, margin:10, borderRadius:10}}/>
            <Text>Header</Text>
        </View>
    )
}

export default Header
