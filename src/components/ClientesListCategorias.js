import React,{useState, useEffect, useCallback} from 'react'
import { api } from '../helpers'
import { StatusBar, SafeAreaView, Image, FlatList, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity,Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../actions'
import { FontAwesome } from '@expo/vector-icons'

const { width, height } = Dimensions.get('screen');

function ClientesListCategorias ({navigation}){        
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [campo, setCampo] = useState('');
    const dispatch = useDispatch()
    const {pagina, paginas, data} = useSelector(state => state.clientes)
    const item = useSelector(state => state.categorias.item)    

    const makeHttpRequestWhithPage = useCallback((page, num, cat, open, tipo) =>{
       /*dispatch(clientesActions.getDatas(page,num,cat,open,tipo))       */
       dispatch(clientesActions.searchCategorias(page,num,item,open,tipo))      
      setLoading(false)
    },[dispatch])
    
        
    const handleLoadMore = event => {          
      let dato = paginas >= page ? page + 1 : page      
      setPage(dato)      
      setLoading(true)
      makeHttpRequestWhithPage(dato, 6, 0, true, 0)      
    }
    const getDatas = event => {                
      makeHttpRequestWhithPage(1, 6, 0, true, 0)
      setPage(1)
    }

    const renderFooter = () => {          
      return(
        
        <View style={styles.loader}>
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
        </View>
      )
    }

    const ItemView = ({item}) =>(
        <View style={styles.card}>
          <TouchableOpacity style={styles.itemContainer}
          
         onPress={() => { 
          dispatch(clientesActions.getItem(item.id))
          navigation.navigate('Detalle')}}> 
          <Image style={styles.thumbnail} 
          source={{uri:`${api}/static/images/clientes/sm/${item.filename}`}} />  
          <FontAwesome 
                  style={styles.hora} 
                  name="circle" 
                  size={18} 
                  color={(item.Horarios.hinicio === '00:00' && item.Horarios.hfin === '00:00')? 'red': 'green'}
                />
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
      <FlatList
            data={data}                          
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
  item: {
    backgroundColor: '#f9c2ff',
    height: 70,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
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
export default ClientesListCategorias

