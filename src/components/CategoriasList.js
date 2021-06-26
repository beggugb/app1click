import React,{useState} from 'react'
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {clientesActions} from '../actions'
import { FontAwesome5 } from '@expo/vector-icons'
import { useEffect } from 'react';
import { useCallback } from 'react';
import Loader from '../components/loader';
import {styles} from '../constants/styles';
const { width, height } = Dimensions.get('screen');

const CategoriasList = ({navigation}) => {    
  
  const dispatch = useDispatch()  
  const {data, item } = useSelector(state => state.categorias) 
  const [color, setColor] = useState(1)   
  
  const renderSeparator = () => (
    <View style={{marginRight:5}}/>
  );
  const ItemView = (item) =>{
      return(      
        <View card style={styles.card}>
            <TouchableOpacity style={styles.itemContainer} onPress={() => {makeHttpRequestWhithPage(item)}}>              
              <FontAwesome5 name={item.icono} size={25} color={item.id === color ? "#0978de":"#c1c1c1" } />                                                               
          </TouchableOpacity>                             
        </View>           
       )
    }
     const getComponent = useCallback(() =>{                
      dispatch(clientesActions.getCategorias())         
    },[])
      useEffect(() =>{              
        getComponent()
        return () =>{      
         /* dispatch(clientesActions.resetL('RESET_DATA'))                */
        };      
    },[dispatch, getComponent])   
return(          
    <View style={styles.bar} >
       <FlatList
        horizontal= {true}
        ItemSeparatorComponent={renderSeparator}
        data={data}     
        renderItem={({ item }) => ItemView(item) }
        keyExtractor={item => item.id.toString()}                    
      /> 
    </View>    
    ); 
}  
export default CategoriasList

