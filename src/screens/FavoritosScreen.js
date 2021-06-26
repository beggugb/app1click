import React,{useEffect, useState} from "react";

import { View, StyleSheet, Text, TextInput, TouchableOpacity,  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../actions'
import { EvilIcons, FontAwesome5, FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

const FavoritosScreen = ({navigation}) => {
    
    
  return (
    <View style={styles.container}>  
      <View style={styles.body}>
                         
      </View>
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,    
    alignItems: "center",
    textAlign: "center"        
  },
  header: {
    borderWidth: 1,
    borderColor: '#4d4d4d',    
    width: '80%',
    height: 60,    
    alignItems: 'flex-end',    
    marginTop:10,
    marginLeft:30,
    marginRight:30
  },
  seccion:{
        borderWidth: 1,
        marginTop:2,
        borderColor: '#c1c1c1',
        borderRadius: 5,        
        zIndex:0,
        padding:5
    },    
  body: {
    borderWidth: 1,
    borderColor: '#c1c1c1',    
    borderRadius:5,
    width: '90%',    
    padding: 5,
    marginTop:5,
    flex:1
  },
  text_footer: {
        color: '#05375a',
        fontSize: 14        
    },
  action: {
        flexDirection: 'row',
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
   textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },  

     button: {
        alignItems: 'center'
    },
    signIn: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'orange'
    },

});

export default FavoritosScreen;