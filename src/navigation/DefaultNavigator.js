import React, {useEffect} from "react";
import RootStackScreen from './RootStackScreen'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from '../screens/auth/SignInScreen';
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const DefaultNavigator = () => {
const userToken = useSelector(state => state.users.userToken)
const dispatch = useDispatch()

useEffect(() =>{
  (async () =>{
  try{            
      const uToken = await AsyncStorage.getItem('@userToken')
      if(uToken && uToken !== 'undefined' && uToken !== ''){
       dispatch({ type: 'SET_TOKEN', token: uToken }) 
       /*dispatch({ type: 'SET_TOKEN', token: null }) */
      }      
    }catch(e){
      console.log(e)
    } 
  })()
})
console.log(userToken)
return (
    <Stack.Navigator>
    {userToken !== null ? (    
       <Stack.Screen
          name="Home"
          component={HomeScreen}          
        /> 
    ) : (   
    <Stack.Screen 
      name="SignInScreen" 
      component={SignInScreen} />
    )}    
    </Stack.Navigator>
  );
}

export default DefaultNavigator;