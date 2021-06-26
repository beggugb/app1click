import React from 'react'
import {Image, TouchableOpacity } from 'react-native'

import Images from '../../constants/Images'

function LogoIcon(props){
    return(
        <Image
            source={Images.Logos}
            style={{ height:42, width:100, zIndex: 1}}
        />
    )
}

export default LogoIcon