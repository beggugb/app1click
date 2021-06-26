import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
  },
  homeCategoria:{                               
    height: 63,
    marginTop:2,    
    backgroundColor: '#fff'
  },   
  homeContainer:{               
    flex:1,    
    alignItems:'center',                  
    borderRadius:2,
    marginTop:2    
  },
  bar: {        
      width: '100%',      
      height: 60,      
      paddingTop:2,
      paddingLeft:2
    },
  card: {
      backgroundColor: '#fff',
      marginVertical: 16,      
      borderColor: '#4d4d4d30',
      borderWidth: 1,      
      marginBottom: 2,
      marginTop: 2,
      borderRadius: 50,     
      width: 55,
      height: 55,
    },
  itemContainer: {               
      justifyContent: "center",
      alignItems: "center",      
      paddingTop: 12
  }, 
  clcard: {      
      backgroundColor: '#fff',
      marginVertical: 15,      
      borderColor: '#c1c1c1',
      borderRadius: 6,
      borderWidth: 1,
      minHeight: 92,
      marginBottom: 2,
      marginTop: 2,
      flexDirection: 'row'                   
  },
  clthumbnail: {        
      height:94,
      width: 90,
      borderRadius: 4,           
      marginLeft:2,     
      marginTop:1, 
      width: '30%',
      borderColor: '#c1c1c1',
      borderWidth: 1,
    },
  clitemTexto: {    
      width: '60%',
      borderRadius: 4,
      paddingLeft:7,              
      
    },
  clitemLinks: {    
      width: '10%',
      borderRadius: 4,       
      backgroundColor: '#eaeaea',              
      marginLeft: -2,
      justifyContent: "center",
      alignItems: "center",
    },    
  cltextTitulo:{
      fontSize:14.5,    
      fontWeight: '700',    
      marginBottom:1
    },  
  cltextDescripcion:{
       fontSize:11,
       color: '#4f4f4f',
       fontWeight:"700"

    },
  cltextDetalle:{
      fontSize:11,           
      color: '#4d4d4d',
      fontStyle:'italic'
   },
  cltextEstado:{
      fontSize:11,     
      fontWeight:"700",
      color:'#629ed5'
   },
  clcuadro: {          
      marginTop:3
    },
  clloading:{
      zIndex:1,
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',      
    }, 



});
