import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Image, ImageBackground, FlatList, ScrollView, Dimensions, StyleSheet, View, Linking } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { api } from '../helpers'


const { height, width } = Dimensions.get("screen")

function Slider ({ img1, img2, img3 } ){       
  const [images, setImages] = useState([    
    `${api}/static/images/slider/md/${img1}`,
    `${api}/static/images/slider/md/${img2}`,
    `${api}/static/images/slider/md/${img3}`,
   ]);
  return(
    <View flex style={styles.banner}>      
            <SliderBox 
            images={images} 
            autoplay={true}
            circleLoop
            style={styles.mtk}
            />
    </View>
    
  ) 
}

const styles = StyleSheet.create({  
  banner: {    
    flex: 1    
  },    
  mtk: {
    width: '91%',
    height: '100%',
  },
});
export default Slider