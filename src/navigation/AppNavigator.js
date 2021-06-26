import React, {useEffect, useState} from "react";
import RootStackScreen from '../screens/RootStackScreen';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

import MainTabScreen from './MainTabScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Drawer = createDrawerNavigator();

const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

const AppNavigator = (props)=>{ 
 const [isDarkTheme, setIsDarkTheme] = useState(false);
 const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
 const userToken = useSelector(state => state.users);

<PaperProvider theme={theme}>
 <NavigationContainer theme={theme}>
      { userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />          
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />          
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>  
</PaperProvider>    
}
export default AppNavigator;