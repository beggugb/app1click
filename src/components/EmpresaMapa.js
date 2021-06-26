import React, {useState } from 'react';
import {StyleSheet, Dimensions } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import { mapStyle } from '../helpers'
import { useDispatch } from 'react-redux'

const { width } = Dimensions.get('screen');
const EmpresaMapa = ({route, navigation}) => {  
  const [loading, setLoading] = useState(false);  
  const dispatch = useDispatch() ; 
  const [text, setText] = useState('');
  const { platitude, plongitude, ptitle, ptelefono, pdireccion, pfilename } = route.params;

  return (         
    <MapView 
          style={styles.mapStyle} 
          region={{ latitude: parseFloat(platitude), longitude: parseFloat(plongitude), latitudeDelta: 0.007, longitudeDelta: 0.007, }}
          loadingEnabled={true}
          zoomEnabled={true}
          customMapStyle={mapStyle}>
      <Marker
          coordinate={{ "latitude": parseFloat(platitude), "longitude": parseFloat(plongitude) }}
          title={ptitle}
          description={'(Telf:'+ptelefono+')'}
          pinColor={ 'red' }
      />
  </MapView> 
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
  }
});

export default EmpresaMapa;