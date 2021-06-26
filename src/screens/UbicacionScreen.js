import React  from "react";
import { View, StyleSheet, Text, StatusBar, Dimensions  } from "react-native";
import ClienteProfile from '../components/ClienteProfile'
import EmpresaMapa from '../components/EmpresaMapa'
import { useTheme } from '@react-navigation/native';

import Loader from '../components/loader';
import { useSelector } from 'react-redux'
const {  width } = Dimensions.get("screen")
const thumbMeasure = (width - 48 - 32) / 3;

const UbicacionScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();  
  const loading = useSelector(state => state.users.loading);

  return (
     <View style={styles.container}>        
     <Loader loading={loading} />
      <View style={styles.subMapa}> 
      <EmpresaMapa route={route} navigation={navigation}/>         
      </View>
      <View style={styles.subContainer}>       
         <ClienteProfile route={route} navigation={navigation}/> 
      </View>        
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
    subMapa: {                        
      flex:1,
      width: width - 1    
    },
    subContainer: {      
      width: '90%',            
      zIndex: 2,            
      borderRadius:10,
      height: 100,      
      backgroundColor: "#0177f5",
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderWidth:3,
    borderColor: '#c1c1c1'
    },
});

export default UbicacionScreen;