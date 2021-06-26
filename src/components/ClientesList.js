import React,{useState} from 'react'
import { SafeAreaView, Image, Button, FlatList, StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { api } from '../helpers'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { PhoneIcon } from './Icons'
import {clientesActions} from '../actions'
import { useEffect } from 'react';
import { useCallback } from 'react';
import Loader from '../components/loader';
import {styles} from '../constants/styles';

const ClientesList = ({navigation}) => {    
  const [page, setPage] = useState(0);
  const dispatch = useDispatch()  
  const {paginas, pagina, total, data } = useSelector(state => state.clientes)  
  const [isLoading, setLoading] = useState(false);
  const { loading } = useSelector(state => state.users) 

  const getData = useCallback(() =>{                
      dispatch(clientesActions.getData(1,7,0,true,0))            
      setLoading(false)
      setPage(1)      
    },[])

  const handleLoadMore = () =>{       
       dispatch(clientesActions.getData(pagina+1,7,0,true,0))                   
    }

  const renderItem = ({ item }) => (      
      <View key={item.key} style={styles.clcard}>
        <TouchableOpacity style={{ flexDirection:'row', margin:0}} onPress={() => { 
          dispatch(clientesActions.getItem(item.id))
          navigation.navigate('Detalle')}}> 
          <Image style={styles.clthumbnail} source={{uri:`${api}/static/images/clientes/sm/${item.filename}`}} />
          <View style={styles.clitemTexto}>
            <Text style={styles.cltextTitulo}  ellipsizeMode='tail' numberOfLines={1}>{item.nombres}</Text>                          
            <Text style={styles.cltextDetalle} ellipsizeMode='tail' numberOfLines={2}>{item.descripcion}</Text>                  
            <Text style={styles.cltextDescripcion} numberOfLines={1}>{item.direccion}</Text>
            <Text style={styles.cltextDescripcion}>Tel: {item.telefono} Cel:{item.celular}</Text>                           
            <Text style={styles.cltextEstado}>{item.Horarios.hinicio} - {item.Horarios.hfin}</Text> 
          </View>
          </TouchableOpacity> 
          <View style={styles.clitemLinks}>            
          <TouchableOpacity style={styles.clcuadro}>
              <FontAwesome name="heart-o" size={22} color="#c1c1c1" />    
          </TouchableOpacity>
          <TouchableOpacity style={styles.clcuadro}>
              <FontAwesome5 name="link" size={22} color="#4d4d4d" />    
          </TouchableOpacity>
          <TouchableOpacity style={styles.clcuadro}>              
              <PhoneIcon telefono={item.telefono} />
          </TouchableOpacity>
        </View>
      </View>      
      ); 

return(          
    <SafeAreaView style={styles.container}>       
        <FlatList
            data={data}                                      
            renderItem={renderItem}
            keyExtractor = {(item, index) => index+"_"+item.id.toString() }
            onEndReached={handleLoadMore}             
            onEndReachedThreshold={0.1}           
            style={styles.clientes}                   
            refreshing={isLoading}              
            onRefresh={getData}
            removeClippedSubviews={true}
            maxToRenderPerBatch={7}            
        /> 
      </SafeAreaView>     
    ); 
}  
export default ClientesList

