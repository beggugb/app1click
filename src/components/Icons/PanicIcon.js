import React, {useState, useEffect} from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location';

import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../../actions'





function PanicIcon(){  
    
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude ] = useState(null);
    const [longitude, setLongitude ] = useState(null);
    const navigation = useNavigation() 
    const dispatch = useDispatch()
    const usuario = useSelector(state => state.clientes.user)

 
  return(
        <View style={styles.container}>                        
      
        <TouchableOpacity  style={styles.imgSearch}>
            <MaterialCommunityIcons name="bell-ring-outline" size={25} color="white" />
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,            
      alignItems: 'center',
      marginTop: 25
    },
    imgSearch: {        
        borderRadius:40,        
        height: 70,
        width: 70,                
        backgroundColor:'#F5365C',        
        justifyContent: "center",                                  
        paddingTop: 2,
        paddingLeft: 17,
        borderColor:"#015EEA",
        borderWidth: 6
      },        
  });

export default PanicIcon