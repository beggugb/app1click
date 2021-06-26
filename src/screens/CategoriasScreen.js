import React, { useCallback, useEffect, useState }  from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import * as Location from 'expo-location';
import Loader from '../components/loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CategoriasList from '../components/CategoriasList'

const CategoriasScreen = ({navigation}) => {

    const { colors } = useTheme();
    const theme = useTheme();
    const [mount, setMount] = useState(false)
    const dispatch = useDispatch()    
    const loading = useSelector(state => state.users.loading);

   useEffect(() => {          
    if(!mount){      
      setMount(true)
      console.log('cargarga categorias')
    }    
    return () =>{      
          /*dispatch({ type: 'RESET_CLIENTE' });*/
          console.log('descarga categorias')
        };
    }, []);

    return (
      <View style={styles.container}>   
      <Loader loading={loading} />                     
        <View style={styles.homeContainer}>       
          <CategoriasList navigation={navigation}/>
        </View>        
      </View>
    );
};

export default CategoriasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },     
 
  homeContainer:{               
    flex:1,    
    alignItems:'center',            
    backgroundColor: '#eaeaea',    
    borderRadius:2,
    marginLeft:1,
    marginRight:1,
    backgroundColor:'#fff'
  },
});
