import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Image, ImageBackground, FlatList, ScrollView, Dimensions, StyleSheet, View, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { api } from '../helpers'


const { height, width } = Dimensions.get("screen")

function Banner ({ banner } ){      
  console.log(banner)
  console.log({uri:`${api}/static/images/banner/md/${banner}`})
  const imgPreview = <Image source={{uri:`${api}/static/images/banner/md/${banner}`}} style={styles.mtk} />                       
  return(
    <View flex style={styles.banner}>      
      <Image source={{uri:`${api}/static/images/banner/md/${banner}`}} style={styles.mtk} /> 
    </View>
    
  ) 
}

const styles = StyleSheet.create({  
  banner: {    
    flex: 1
  },    
  mtk: {
    width: width /1.1,
    height: 110,
    borderRadius:5
  },
});
export default Banner