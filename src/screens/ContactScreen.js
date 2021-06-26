import React from "react";

import { View, StyleSheet, Text, Dimensions, } from "react-native";
import * as Animatable from 'react-native-animatable';

const {height, width} = Dimensions.get("screen");
const height_logo = height * 0.09;
const width_logo = width * 0.4;

const ContactScreen = () => {

  return (
    <View style={styles.center}>
      <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
      </View>
      <Text style={styles.title}>Edificio Costa Rica #50, Piso 1 - Oficina #104</Text>
      <Text style={styles.title}>Telf: +591 - 33215060</Text>
      <Text style={styles.title}>Celular: +591 - 63553168</Text>
      <Text style={styles.title}>Email: comercial@1click-bo.com</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff"
  },
  header: {      
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:2,
      borderColor:'#c1c1c1',
      backgroundColor: '#178cf7',
      borderRadius:10,
      padding: 7,
      marginBottom:30,
      shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  },
   logo: {
      width: width_logo,
      height: height_logo
  },
  title: {
      color: '#939393',
      fontSize: 14,
      fontWeight: 'bold'
  },
  desarrollo: {      
    paddingTop: 20,  
    width: width - 10,
    borderWidth:2,
    borderColor:'#c1c1c1',  
    alignItems:'flex-end'
  },

});

export default ContactScreen;