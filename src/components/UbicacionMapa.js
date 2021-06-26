import React, {useState } from 'react';
import { StyleSheet, Image, Dimensions, View, Text } from 'react-native';
import locationImg from '../../assets/images/viewS.png'
import MapView,{Marker, Callout, CalloutSubview, AnimatedRegion } from 'react-native-maps';
import { mapStyle } from '../helpers'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/loader';
const { width } = Dimensions.get('screen');

const UbicacionMapa = ({latitude, longitude, markets, navigation}) => {  
  const loading = useSelector(state => state.users.loading); 
  const dispatch = useDispatch() ; 
  const [text, setText] = useState('');
  
  return (  
    <>
    <Loader loading={loading} />   
    <MapView 
        style={styles.mapStyle} 
        region={{ 
          latitude: parseFloat(latitude), 
          longitude: parseFloat(longitude), 
          latitudeDelta: 0.028, 
          longitudeDelta: 0.028, }}                           
          loadingEnabled={true}          
          zoomEnabled={true}
          customMapStyle={mapStyle}>
    
    <Marker
        coordinate={{ 
          "latitude": parseFloat(latitude), 
          "longitude": parseFloat(longitude) }}/>  



    { markets.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                  }}
                  title={marker.title}
                  description={marker.description}                                         
                  pinColor={'blue' }     
                  style={styles.marker}                         
                >                

                  <Image
                    source={locationImg}
                    style={{width: 29, height: 29}}
                    resizeMode="contain"
                  />
                </Marker>))
        }
    </MapView>    
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {    
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height -170,
  },
  marker: {
    width: 60,
    height: 75,
    borderColor: '#c1c1c1'
  },  
});

export default UbicacionMapa;