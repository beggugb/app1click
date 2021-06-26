import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useCallback, useState} from 'react';
import { Alert, Button, Image, ImageBackground, FlatList, ScrollView, Dimensions, StyleSheet, View, Linking } from 'react-native';

import YoutubePlayer from "react-native-youtube-iframe";

const { height, width } = Dimensions.get("screen")

function Video ({ video } ){      
    const [playing, setPlaying] = useState(true)
    const onStateChange = useCallback((state) => {
        if (state === "ended") {         
          /*Alert.alert("video has finished playing!");*/
        }
         
      }, []);
    
      const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);
  return(
    <View flex style={styles.banner}>      
       <YoutubePlayer
        height={129}
        width={310}
        play={playing}
        videoId={video}
        onChangeState={onStateChange}
      />      
    </View>
    
  ) 
}

const styles = StyleSheet.create({  
  banner: {    
    flex: 1,
    alignItems:'center',
    marginTop: -15
  },      
});
export default Video