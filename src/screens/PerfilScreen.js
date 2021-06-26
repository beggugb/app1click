import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,    
    StyleSheet ,    
    Button,    
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux'
import {styles} from '../constants/styles';

const PerfilScreen = () => {    
  const dispatch = useDispatch()
  const signOut = async () => {        
        const uToken = null
        AsyncStorage.removeItem('@userToken');
        dispatch({ type: 'SET_TOKEN', token: uToken }) 
        dispatch({type:'SET_USER',response: uToken})
  };  
   
    return (
      <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Salir cdesde home" onPress={signOut} />
    </View>
    );
};

export default PerfilScreen

