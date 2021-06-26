import React,{useCallback} from "react";
import { View, ImageBackground, StyleSheet, Dimensions, Text} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { HeaderHeight } from "../constants/utils";
import { Images } from "../constants";
import Loader from '../components/loader';
import ClienteDetalle from "../components/ClienteDetalle"
import Publicidad from "../components/Publicidad"
import SucursalLista from "../components/SucursalLista"
import { useSelector, useDispatch  } from 'react-redux'
const {height, width} = Dimensions.get("screen");

const DetalleScreen = () => {
  const loading = useSelector(state => state.users.loading);
  const {item} = useSelector(state => state.clientes);
  const dispatch = useDispatch()  

    useFocusEffect(
      useCallback(() => {      
      return () => {        
        dispatch({type:'RESET_CLIENTE_ITEM'})  
        console.log('descarga cliente')
      };      
    }, [])
  );
  
  return (
    <View style={styles.center}> 
     <Loader loading={loading} />
     {item.id > 0 ?
      <ImageBackground source={Images.ProfileBackground} style={styles.profileContainer}>
          <View style={styles.profileCard} >
            <ClienteDetalle/>
          </View>
          <View style={styles.profileMarketing} >
            <Publicidad cliente={item}/>
          </View>
          <View middle style={styles.profileSucursal}> 
            <SucursalLista/>
          </View>
      </ImageBackground>        
      :null}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,    
    flex: 1
  },  
   profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    
  },
  profileCard: {    
    padding: 16,
    marginHorizontal: 16,
    marginTop: 40,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#fff',
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    height: 190
    
  },
  profileMarketing: {    
    backgroundColor:'#4d4d4d',    
    marginHorizontal: 16,
    padding:2,    
    alignContent:'center',
    height: 115
    },
  profileSucursal: {     
    marginHorizontal: 16,
    marginTop: 2,    
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#fff',    
    height: height /2.15
  },  
});

export default DetalleScreen;