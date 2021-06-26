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
  TextInput,
  Modal,Pressable
} from 'react-native';
import { EvilIcons, FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';


import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../actions'
const { width } = Dimensions.get('screen');



const BuscarInput = ({navigation}) => {  
  const [loading, setLoading] = useState(false);  
  const dispatch = useDispatch() ; 
  const [text, setText] = useState('');
  
  
  const searching = (text) => {                
      let dato = text ? text :  0
      setText(text)
      /*dispatch(clientesActions.getSearch(1,10,0,true,dato))*/
  }

  const search = () => {      
    let dato = text ? text :  0              
    dispatch(clientesActions.getSearch(1,10,0,true,dato))
  }
   

  return (      
  <View style={styles.modalView}>              
     <TextInput      
      value={text}            
      onChangeText={text => searching(text)}
      defaultValue={text}
      style={styles.input} 
      placeholder="...empresa" 
    />     
    <TouchableOpacity 
      style={styles.itemContainer}          
      onPress={() => { search() }}
    >    
    <FontAwesome 
      style={styles.icons} 
      name="search" 
      size={20} 
      color="#eaeaea"             
    />
    </TouchableOpacity>  
  </View>   
  );
};

export default BuscarInput;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,    
    alignItems: "center"
  },
  modalView: {     
    flex:1,           
    padding: 5,    
    marginTop: 1,    
    borderRadius: 5,    
    alignItems: "center",    
    flexDirection:'row'
  },
  input: {   
    height: 40,
    width: '90%',
    backgroundColor:'#eaeaea',
    borderWidth:1,
    borderColor: '#c1c1c1',
    borderRadius:  7,
    paddingLeft:15        
  },
  icons: {   
    borderWidth:1,
    borderColor: '#c1c1c1',
    backgroundColor: '#ea3a2c',
    paddingTop:8,
    paddingLeft:8,
    paddingRight:6,
    paddingBottom:6,
    marginLeft: 5,
    borderRadius: 20

  },


});