import React, {useEffect, useCallback, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, Text } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Banner from './Banner'
import Slider from './Slider'
import Video from './Video'

const Publicidad = ({cliente}) => {

  /*const cliente = useSelector(state => state.clientes.item) */
  const [component, setComponent ] = useState()  
  const dispatch = useDispatch()  
  const getComponent = useCallback(() =>{    
  console.log(cliente.paqueteId)  
  console.log(cliente.banner)     
    switch(cliente.paqueteId){      
      case '2':
        setComponent(<Banner banner={cliente.banner}/>)
        break  
      case '3':
        setComponent(<Slider img1={cliente.slider1} img2={cliente.slider2} img3={cliente.slider3}/>)
        break    
      case '4':
        setComponent(<Video video={cliente.video} />)
        break    
      default:
        setComponent(<View><Text size={17} style={styles.textoMarketing}>Sin Publicidad</Text></View>)
        break      
  }
    },[])

  useFocusEffect(
      useCallback(() => {                      
      getComponent()
      return () => {  
        /*dispatch({type:'RESET_CLIENTE_ITEM'})  */
        console.log('descarga publicidad')
      };      
    }, [])
  );

  return (

    <View style={styles.center}>
        {component}
    </View>

  );

};

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

});

export default Publicidad;