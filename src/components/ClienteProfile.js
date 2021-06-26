import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,  
  View,  
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  Modal,Pressable
} from 'react-native';
import { WhatsAppIcon, PhoneIcon, MapsIcon, FacebookIcon, InstagramIcon } from './Icons'
import { EvilIcons, FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Text } from 'react-native-paper';
import { api } from '../helpers'
import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../actions'
const { width } = Dimensions.get('screen');



const ClienteProfile = ({ route, navigation }) => {  
  const [loading, setLoading] = useState(false);  
  const dispatch = useDispatch() ; 
  const [text, setText] = useState('');
  const { platitude, plongitude, ptitle, ptelefono, pdireccion, pfilename } = route.params;
  
  return (      
  <>                
    <View style={styles.avatarContainer}>    
       <Image source={{uri:`${api}/static/images/clientes/sm/${pfilename}`}} style={styles.avatar} />
    </View>
    <View style={styles.nameInfo}>
      <Text style={styles.nombre} numberOfLines={1}>{ptitle}</Text>
      <Text style={styles.detalle} numberOfLines={1}>{ptelefono}</Text>
      <Text style={styles.detalle} numberOfLines={1}>{pdireccion}</Text>      
      <Text style={styles.textEmail}></Text>                
    </View>
  </>   
  );
};

export default ClienteProfile;
const styles = StyleSheet.create({
  avatarContainer: {
    position: "relative",        
    alignItems:'flex-start'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 62,
    borderWidth: 2,
    borderColor: "#c1c1c1"
  },
  nameInfo: {    
    alignItems:'flex-end',
    width: "75%",
    marginTop: -90,
    marginLeft: 60
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
    color: '#c1c1c1',
    fontWeight: 'bold'
  },
  detalle:{
    fontSize: 13,     
    color: '#c1c1c1'
  },
    textEmail:{
    fontSize:12,     
    color: '#015eea'
 },
});