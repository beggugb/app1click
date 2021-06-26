import React, {useState} from 'react';
import {
  StyleSheet,  
  View,  
  Image,  
  Dimensions,
  Text
} from 'react-native';
import { WhatsAppIcon, PhoneIcon, MapsIcon, FacebookIcon, InstagramIcon } from './Icons'
import { api } from '../helpers'
import { useSelector, useDispatch } from 'react-redux'
const { width } = Dimensions.get('screen');

const ClienteDetalle = ({navigation}) => {  
  const item = useSelector(state => state.clientes.item)   
  return (      
  <>                
    <View style={styles.avatarContainer}>    
       <Image source={{uri:`${api}/static/images/clientes/sm/${item.filename}`}} style={styles.avatar} />
    </View>
    <View style={styles.nameInfo}>
      <Text style={styles.nombre} numberOfLines={1}>{item.nombres}</Text>
      <Text style={styles.detalle} numberOfLines={1}>{item.direccion}</Text>
      <Text style={styles.detalle} numberOfLines={1}>{item.telefono}</Text>
      <Text color="#4d4d4d" size={11} numberOfLines={1}
           onPress={() => { Linking.openURL(`https://${item.web}`);   }}> {item.web}</Text>
      <Text style={styles.textEmail}>{item.email}</Text>                
    </View>

    <View style={styles.info}>    
    <View  style={styles.infoce}>  
      <View style={styles.icono}>
          <FacebookIcon enlace={item.facebook}/>
      </View>  
      <View middle style={styles.icono}>
          <InstagramIcon enlace={item.instagram}/>
        </View>
        <View middle style={styles.icono}>
          <PhoneIcon telefono={item.telefono} />
        </View>
        <View middle style={styles.icono}>
          <WhatsAppIcon telefono={item.celular} mesage={'Buenas tardes.... '}    />
        </View>
        <View middle style={styles.icono}>                  
                  <MapsIcon
                    latitude={item.latitude}
                    longitude={item.longitude}
                    title={item.nombres}                      
                    telefono={item.telefono}               
                    filename={item.filename}               
                    direccion={item.direccion}               
                  />
        </View>  
      </View>        
    </View>
  </>   
  );
};

export default ClienteDetalle;
const styles = StyleSheet.create({
  avatarContainer: {
    position: "relative",
    marginTop: -20,
    marginStart: -27,
    alignItems:'flex-start'
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 62,
    borderWidth: 2,
    borderColor: "#c1c1c1"
  },
  nameInfo: {    
    alignItems:'flex-end',
    width: "75%",
    marginTop: -50,
    marginLeft: 75
  },
  textEmail:{
    fontSize:11,     
    color: '#015eea'
  },
  info: {        
    marginTop:10,
    alignItems:'center'    
  },
  infoce: {            
    flexDirection: 'row',        
  },
  icono: {
    borderColor: "#c1c1c1",    
    padding:2,
    borderWidth:1,
    borderRadius: 25,    
    marginRight: 10
  },
  nombre:{
    fontSize: 20,     
    color: '#4d4d4d',
    fontWeight: 'bold'
  },
  detalle:{
    fontSize: 13,     
    color: '#4d4d4d'
  },

});