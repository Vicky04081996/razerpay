import React from 'react'
import { SafeAreaView} from 'react-native'
import Router from './Screen/router'
const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex:1}}>
      <Router />
    </SafeAreaView>
  )
}

export default App
