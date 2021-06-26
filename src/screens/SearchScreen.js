import React, { useCallback, useEffect, useState }  from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import ClientesListSearch from '../components/ClientesListSearch'
import BuscarInput from '../components/BuscarInput'
import Loader from '../components/loader';

const SearchScreen = ({navigation}) => {

    const { colors } = useTheme();
    const theme = useTheme();    
    const dispatch = useDispatch()    
    const loading = useSelector(state => state.users.loading);
   


    return (
      <View style={styles.container}>   
      <Loader loading={loading} />             
        <View style={styles.categoriaContainer}>                
          <BuscarInput/>
        </View>                
        <View style={styles.homeContainer}>       
          <ClientesListSearch navigation={navigation} />
        </View>        
      </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },     
  categoriaContainer:{        
    flexDirection:'row',
    alignItems:'center',            
    backgroundColor: '#c1c1c1'
  },
  categorias:{    
    width: '50%',
    height: 44
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
