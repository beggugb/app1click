import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MapasScreen from "../screens/MapasScreen";
import PerfilScreen from "../screens/PerfilScreen";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";
import DetalleScreen from "../screens/DetalleScreen";
import UbicacionScreen from "../screens/UbicacionScreen";
import CategoriasScreen from "../screens/CategoriasScreen";
import FavoritosScreen from "../screens/FavoritosScreen";
import SearchScreen from "../screens/SearchScreen";
import BuscarInput from "../components/BuscarInput" 
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { LogoIcon, MenuIcon, PanicIcon, PerfilIcon, BackIcon, SearchIcon } from '../components/Icons'
import { begguTheme } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainStackNavigator = (props)=>{
    return(
    <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={screenOptionStyle} >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{                            
            headerLeft: () =>  <LogoIcon {...props}/>,       
            headerTitle: () => <PanicIcon {...props}/>,
            headerRight: () => <PerfilIcon {...props}/>,
            headerStyle: {
                        backgroundColor: begguTheme.COLORS.DEFAULT,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0,
                      },
                }}
        />      
        <Stack.Screen
          name="Detalle"
          component={DetalleScreen}
          options={{                
            headerTitle: () => <LogoIcon {...props}/>,       
            headerRight: () => <PanicIcon {...props}/>,
            headerStyle: {
                        backgroundColor: begguTheme.COLORS.DEFAULT,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0,
                      },
                }}
        /> 

    </Stack.Navigator>
    )
}

const MapasStackNavigator = (props) => {
        return (
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,                                               
                  headerStyle: {
                      backgroundColor: begguTheme.COLORS.DEFAULT,
                      borderBottomColor: 'black',
                      borderBottomWidth: 0,
                    },
                }}
                name="Mapas" 
                component={MapasScreen} 
                />
          </Stack.Navigator>
        );
    }

const FavoritosStackNavigator = (props) => {
        return (
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,                                               
                  headerStyle: {
                      backgroundColor: begguTheme.COLORS.DEFAULT,
                      borderBottomColor: 'black',
                      borderBottomWidth: 0,
                    },
                }}
                name="Favoritos" 
                component={FavoritosScreen} 
                />
          </Stack.Navigator>
        );
    }    
  const PerfilStackNavigator = (props) => {
        return (
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,                                               
                  headerStyle: {
                      backgroundColor: begguTheme.COLORS.DEFAULT,
                      borderBottomColor: 'black',
                      borderBottomWidth: 0,
                    },
                }}
                name="Perfil" 
                component={ PerfilScreen } 
                />
          </Stack.Navigator>
        );
    }
  const LoginStackNavigator = (props) => {
        return (
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,                                               
                  headerStyle: {
                      backgroundColor: begguTheme.COLORS.DEFAULT,
                      borderBottomColor: 'black',
                      borderBottomWidth: 0,
                    },
                }}
                name="Login" 
                component={ LoginScreen } 
                />
          </Stack.Navigator>
        );
    }  

  const BuscarStackNavigator = (props) => {
        return (
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,                                               
                  headerStyle: {
                      backgroundColor: begguTheme.COLORS.DEFAULT,
                      borderBottomColor: 'black',
                      borderBottomWidth: 0,
                    },
                }}
                name="Buscar" 
                component={ SearchScreen } 
                />
          </Stack.Navigator>
        );
    }      

const PrivateStackScreen = () => { 
  return (
    <Tab.Navigator     
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Buscar: 'search',
            Videos: 'youtube',
            Mapas: 'map',            
            Favoritos: 'heart',
            Perfil: 'user',
            Login: 'user'
  
          };
    
          return (
            <FontAwesome5
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })} 
    >
    <Tab.Screen name="Home" component={MainStackNavigator}/>
    <Tab.Screen name="Buscar" component={BuscarStackNavigator}/>
    <Tab.Screen name="Mapas" component={MapasStackNavigator}/>
    <Tab.Screen name="Favoritos" component={FavoritosStackNavigator} />                  
    <Tab.Screen name="Perfil" component={PerfilStackNavigator} />
    </Tab.Navigator>
  );

};
export default PrivateStackScreen;