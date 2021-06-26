import React,{useCallback} from "react";
import { View, StyleSheet, Dimensions  } from "react-native";
import MenuMapas from '../components/MenuMapas'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import UbicacionMapa from '../components/UbicacionMapa'
import { useTheme } from '@react-navigation/native';
import Loader from '../components/loader';
import { useSelector,useDispatch } from 'react-redux'
const { height, width } = Dimensions.get("screen")
const thumbMeasure = (width - 48 - 32) / 3;
import * as Location from 'expo-location';

const MapasScreen = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch()    
  const theme = useTheme();
  const loading = useSelector(state => state.users.loading);
  const {latitude,longitude,data} = useSelector(state => state.mapas);




  useFocusEffect(
    useCallback(() => { 
      /**/
      dispatch({ type: 'SET_LOADING', state: true }); 
       (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});       
      dispatch({ type: 'SET_LOCATION', nlatitude: JSON.stringify(location.coords.latitude), nlongitude: JSON.stringify(location.coords.longitude) });
      dispatch({ type: 'SET_LOADING', state: false }); 
    })();

      /**/     
      return () => {        
        /*dispatch({type:'RESET_CLIENTE_ITEM'})  */
        console.log('descarga mapas')
      };      
    }, [])
  );

console.log(latitude)
console.log(longitude)
  return (
     <View style={styles.container}>   
     <View style={styles.subContainer}> 
      <Loader loading={loading} />
        <MenuMapas/>
      </View> 
       <UbicacionMapa
         latitude={latitude}
         longitude={longitude}
         markets={data}
       />     
    </View>
  );

};

const styles = StyleSheet.create({
 container: {
      flex: 1,
      backgroundColor: '#eaeaea10',       
      alignItems: 'center',      
      zIndex: 1,
    },
    subContainer: {      
      width: '100%',      
      height: 60,
      zIndex: 2,
      backgroundColor: '#fff',
      borderBottomWidth:1,
      borderBottomColor: '#c1c1c1'
    },
});

export default MapasScreen;