import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './src/constants/store'
import { Router } from './src/routes/Router'

const Stack = createStackNavigator()
const App =() =>{
  return(
    <StoreProvider store={store}>            
      <Router/>        
    </StoreProvider>
  )
}

export default App;