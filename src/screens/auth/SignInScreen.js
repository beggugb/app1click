import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button,
    ActivityIndicator
} from 'react-native';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux'
import { SocialIcon } from 'react-native-elements'
import {styles} from '../../constants/styles';
const SignInScreen = () => {  
    
    const [loading, isLoading] = useState(false);
    const dispatch = useDispatch()
    
   
    const ssignUpFacebook  = async () => {
        isLoading(true);
        /*const uToken = '123'
        AsyncStorage.setItem('@userToken', JSON.stringify(uToken));
        dispatch({ type: 'SET_TOKEN', token: uToken }) */

    };

    const signUpFacebook = async () => {        
    try {
      await Facebook.initializeAsync({
      appId: '301307365008325'
    });
      const { 
        type, 
        token 
      }  = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
        // console.log((await response.json()).name);
        const data = await response.json();
        //setUser(data);
        
        const jsonUserToken = JSON.stringify(data.id) 
        AsyncStorage.setItem('@userToken', jsonUserToken) 
        
        dispatch({type:'SET_USER',response: data})
        dispatch({ type: 'SET_TOKEN', token: jsonUserToken }) 

      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };


    

    return (
      <View style={styles.container}>
      <Text>Sign In Screen</Text>
      {loading ? (        
        <ActivityIndicator color={'#000'} animating={true} size="small" />

      ) : (
        <>
        <SocialIcon
          title='Iniciar sesión con Facebook'
          button
          type='facebook'
          onPress={signUpFacebook}
        />

        <SocialIcon
          title='Iniciar sesión con Google'
          button      
          type='google'
        />
        </>
      )}
    </View>
    );
};

export default SignInScreen

