import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Button, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux'
import * as Location from 'expo-location';
import {clientesActions} from '../actions'
const { width } = Dimensions.get('screen');

const MenuMapas = ({navigation}) => {    
    const dispatch = useDispatch() 
    const [btn1, setbtn1 ] = useState('')    
    const [btn2, setbtn2 ] = useState('')    
    const [btn3, setbtn3 ] = useState('')    
    const [btn4, setbtn4 ] = useState('')    
    const [text, setText] = useState('');
    const [titulo, setTitulo] = useState('Emergencias');

    async function onRegionChanges (){   
      dispatch({ type: 'SET_LOADING', state: true });               
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});       
      dispatch({ type: 'SET_LOCATION', nlatitude: JSON.stringify(location.coords.latitude), nlongitude: JSON.stringify(location.coords.longitude) });
      dispatch({ type: 'SET_LOADING', state: false });      
  }


   


   const makeHttpRequestWhithPage = useCallback((tipo, latitude, longitude) =>{
      dispatch(clientesActions.getMapas(tipo))
      dispatch({ type: 'SET_LOADING', state: true });
      console.log('carga mapas2')  
      switch(tipo)
      {
        case 'emergencias':         
          setTitulo('Emergencias')
          setbtn1(styles.active)
          setbtn2(styles.disabled)
          setbtn3(styles.disabled)
          setbtn4(styles.disabled)
        break;
        case 'servicios':   
          setTitulo('Servicios')                 
          setbtn1(styles.disabled)
          setbtn2(styles.active)
          setbtn3(styles.disabled)
          setbtn4(styles.disabled)
        break;
        case 'comidas':           
          setTitulo('Comidas')         
          setbtn1(styles.disabled)
          setbtn2(styles.disabled)
          setbtn3(styles.active)
          setbtn4(styles.disabled)
        break;
        case 'cajeros':           
          setTitulo('Cajeros')         
          setbtn1(styles.disabled)
          setbtn2(styles.disabled)
          setbtn3(styles.disabled)
          setbtn4(styles.active)
        break;
        default:
        break;
      }  
      dispatch({ type: 'SET_LOADING', state: false });          
    },[])


  useFocusEffect(
    useCallback(() => { 
      /**/       
      makeHttpRequestWhithPage('emergencias')
      /**/     
      return () => {        
        /*dispatch({type:'RESET_CLIENTE_ITEM'})  */
        console.log('descarga mapas')
      };      
    }, [])
  );

  return (    
  <>  
    <View style={styles.subContainer}>
    <View style={styles.subi}>               
          <Button onlyIcon 
              onPress={() => { makeHttpRequestWhithPage('emergencias')}}
              icon="hospital" 
              iconFamily="font-awesome-5" 
              iconSize={17}                             
              iconColor="#015EEA"
              style={btn1}>                            
          </Button>
    </View>
    <View style={styles.subi}>                     
          <Button onlyIcon 
              onPress={() => { makeHttpRequestWhithPage('servicios')}}
              icon="taxi" 
              iconFamily="font-awesome-5" 
              iconSize={17} 
              iconColor="#015EEA"
              style={btn2}>              
              
          </Button>
    </View>
    <View style={styles.subi}>               
          <Button onlyIcon 
              onPress={() => { makeHttpRequestWhithPage('comidas')}}
              icon="utensils" 
              iconFamily="font-awesome-5" 
              iconSize={17} 
              iconColor="#015EEA"
              style={btn3}>              
              
          </Button>
    </View>            
    <View style={styles.subi}>                         
          <Button onlyIcon 
              onPress={() => { makeHttpRequestWhithPage('cajeros')}}
              icon="credit-card" 
              iconFamily="font-awesome-5" 
              iconSize={17} 
              iconColor="#015EEA"
              style={btn4}>              
          </Button>  
    </View>
    <View style={styles.subi}>                         
          <TouchableOpacity  
            onPress={() => onRegionChanges() }
            style={styles.imgPerfil}>
            <MaterialIcons name="my-location" size={35} color="#015EEA" />
          </TouchableOpacity>   
    </View>        
  </View>   
  </>
  );
};

export default MenuMapas;
const styles = StyleSheet.create({ 
  subContainer: {
      flex: 1,
      width: '100%',    
      flexDirection:'row',
      zIndex: 2
      
    },
  subi:{    
    width: '20%',
    alignItems: 'center',
    marginTop: -1,    
  },  
  cuadro:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 3.46,
    elevation: 5,
    borderWidth:1,
    borderColor: '#c1c1c1'
  },
  imgPerfil: {                           
    marginTop: 9,
    zIndex: 2,
    borderWidth:1,
    borderRadius: 30,
    borderColor:"#015EEA50",
    backgroundColor:"#eaeaea50",
    padding:4
  },
  active: {                           
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'#015EEA'
  },
  disabled: {     
    backgroundColor:'#fff',                          
    borderWidth:1,
    borderColor:'#eaeaea'
  },
 
});