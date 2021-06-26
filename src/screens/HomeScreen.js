import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,    
    StyleSheet ,    
    Button,    
} from 'react-native';

import ClientesList from '../components/ClientesList'
import CategoriasList from '../components/CategoriasList'

import { useSelector, useDispatch } from 'react-redux'
import {styles} from '../constants/styles';

const HomeScreen = ({navigation}) => {    
  const dispatch = useDispatch()
  
    return (
      <View style={styles.container}>
       <View style={styles.homeCategoria}>
          <CategoriasList navigation={navigation} />
        </View>            
        <View style={styles.homeContainer}>       
          
        </View>      
    </View>
    );
};

export default HomeScreen

