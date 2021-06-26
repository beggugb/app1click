import React,{useState, useEffect, useCallback} from 'react'
import { api } from '../helpers'
import { SafeAreaView, Image, FlatList, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity,Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {clientesActions} from '../actions'
import { FontAwesome } from '@expo/vector-icons'
import Loader from '../components/loader';

const { width, height } = Dimensions.get('screen');

function ClientesListaSearch ({navigation}){        
    const [page, setPage] = useState(1);    
    const [campo, setCampo] = useState('');
    const dispatch = useDispatch()
    const paginas = useSelector(state => state.clientes.paginas)
    const pagina = useSelector(state => state.clientes.pagina)
    const clientes = useSelector(state => state.clientes.data)
    const loading = useSelector(state => state.users.loading);

    const makeHttpRequestWhithPage = useCallback((page, num, cat, open, tipo) =>{
      dispatch(clientesActions.getSearch(page,num,cat,open,tipo))                  
    },[dispatch])
    
 
    useFocusEffect(
      useCallback(() => {      
      makeHttpRequestWhithPage(1,6,0,true,0) 
      return () => {        
        dispatch({type:'RESET_CLIENTE_DATA'})
         console.log('descarga categoris lista')
      };      
    }, [])
  );  
    
    const handleLoadMore = event => {          
      let dato = paginas >= page ? page + 1 : page      
      setPage(dato)            
      makeHttpRequestWhithPage(dato, 6, 0, true, 0)      
    }
    const getDatas = event => {                
      makeHttpRequestWhithPage(1, 6, 0, true, 0)
      setPage(1)
    }

    const ItemView = ({item}) =>(
        <View style={styles.card}>
          <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => { dispatch(clientesActions.getItem(item.id))
            navigation.navigate('Detalle')}}> 
            <Image style={styles.thumbnail} source={{uri:`${api}/static/images/clientes/sm/${item.filename}`}} />  
                <FontAwesome style={styles.hora} name="circle" size={18} color={(item.Horarios.hinicio === '00:00' && item.Horarios.hfin === '00:00')? 'red': 'green'}/>
                <View style={styles.itemTexto}>
                  <Text style={styles.textTitulo} numberOfLines={1}>{item.nombres}</Text>                          
                  <Text style={styles.textDetalle} numberOfLines={2}>{item.descripcion}</Text>                  
                  <Text style={styles.textDescripcion} numberOfLines={1}>{item.direccion}</Text>
                  <Text style={styles.textDescripcion}>Tel: {item.telefono} Cel:{item.celular}</Text>                           
                  <Text style={styles.textEstado}>{item.Horarios.hinicio} - {item.Horarios.hfin}</Text>                                              
                </View>                 
          </TouchableOpacity>  
        </View>
    )
    return(    
    <SafeAreaView style={styles.container}>  
    <Loader loading={loading} />         
      <FlatList
            data={clientes}                          
            renderItem={({ item }) => <ItemView item={item}/> }
            keyExtractor={ item => item.id.toString()}                          
            style={styles.clientes}                   
      />   
    </SafeAreaView>   
      ); 
}
    
const styles = StyleSheet.create({  
   container: {
    flex: 1,
    
  },
  clientes: {      
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 2
    },     
    card: {
      backgroundColor: '#fff',
      marginVertical: 16,      
      borderColor: '#f8f8f8',
      minHeight: 92,
      marginBottom: 2,
      marginTop: 2,
    },
     itemContainer: {    
      flexDirection: 'row',             
      paddingLeft:2,
      paddingTop:2,
    },
    thumbnail: {        
      height:85,
      width: 90,
      borderRadius: 4,     
      marginTop:4,
      marginLeft:2,      
      width: '30%',
    },
    hora:{       
       position: 'relative',
       marginLeft: -18,
       marginTop: 2
   },
   itemTexto: {    
      width: '65%',
      borderRadius: 4,
      paddingLeft:7,        
      marginTop:1,
    },
    textTitulo:{
      fontSize:14.5,    
      fontWeight: '700',    
      marginBottom:1
    },  
    textDescripcion:{
       fontSize:11,
       color: '#4f4f4f',
       fontWeight:"700"

    },
    textDetalle:{
      fontSize:11,           
      color: '#4d4d4d',
      fontStyle:'italic'
   },
    textEstado:{
      fontSize:11,     
      fontWeight:"700",
      color:'#629ed5'
   },

})
export default ClientesListaSearch

