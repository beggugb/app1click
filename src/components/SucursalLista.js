import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,  
  View,  
  Image,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  Modal,Pressable
} from 'react-native';
import { WhatsAppIcon, PhoneIcon, MapsIcon, FacebookIcon, InstagramIcon } from './Icons'
import { EvilIcons, FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Text, Card } from 'react-native-paper';
import { api } from '../helpers'
import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../actions'
const { width } = Dimensions.get('screen');



const SucursalLista = ({navigation}) => {  
  const [loading, setLoading] = useState(false);  
  const dispatch = useDispatch() ; 
  const [text, setText] = useState('');
  const data = useSelector(state => state.sucursales.data) 
  
  const ItemView = (item) =>{
      return(
        <Card style={styles.card}>
          <View style={styles.inicial}>                                       
                <View style={styles.itemTexto}>                
                  <Text style={styles.textTitulo}>{item.nombre}</Text>                        
                  <Text style={styles.textDescripcion} numberOfLines={1}>{item.direccion}</Text>
                  <Text style={styles.textDescripcion}>Teléfono: {item.telefono}</Text>  
                  <Text style={styles.textEstado}>{item.Horarios.hinicio} - {item.Horarios.hfin}</Text>                                                           
                </View>
                <FontAwesome 
                    style={styles.hora} 
                    name="circle" 
                    size={18} 
                    color={(item.Horarios.hinicio === '00:00' && item.Horarios.hfin === '00:00')? 'red': 'green'}
                />     
          </View> 
          <View style={styles.secundario}>
            <View style={styles.icono}>
                <PhoneIcon telefono={item.telefono} />
            </View>
            <View style={styles.icono}>  
                <MapsIcon
                      latitude={item.latitude}
                      longitude={item.longitude}
                      title={item.nombre}                      
                      telefono={item.telefono}                  
                    />
            </View>
          </View>
        </Card>
        )
    }
  console.log(data)
  return (      
    <>   
      <Text style={styles.tsucursal}>Sucursales</Text>  
        <FlatList
          data={data}                 
          renderItem={({ item }) => ItemView(item) }
          keyExtractor={item => item.id.toString()}                             
          style={styles.clientes}
        />   
    </>   
  );
};

export default SucursalLista;
const styles = StyleSheet.create({
   clientes: {      
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 2
    },   
    tsucursal:{
      fontSize: 16,    
      fontWeight: '700',
      paddingLeft: 7,
      color:"#0177f5"
    },
    card: {
      backgroundColor: "#fff",
    marginVertical: 16,
    borderWidth: 0,
    minHeight: 77,
    marginBottom: 0,
    marginTop: 1.4,
    borderWidth:1,
    borderColor: '#c1c1c1'
    },
    inicial:{
    flexDirection: 'row'
  },
   itemTexto: {    
    width: '93%',
    borderRadius: 4,
    paddingLeft:7,        
    marginTop:1,
    marginBottom:1
  },
  textTitulo:{
    fontSize:14.5,    
    fontWeight: '700',    
    marginBottom:1
  },  
  textDescripcion:{
     fontSize:11,     
  },
   textEstado:{
    fontSize:11,     
    fontWeight:"700"
 },
 secundario:{
    position:'relative',    
    flexDirection: 'row',
    alignItems:'flex-end',
    paddingLeft: 260,
    marginTop: -22
  },
  icono: {
    borderColor: "#c1c1c1",    
    padding:2,
    borderWidth:1,
    borderRadius: 25
  },

});