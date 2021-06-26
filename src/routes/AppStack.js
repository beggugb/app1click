import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { begguTheme } from '../constants'
import { LogoIcon, MenuIcon, PanicIcon, PerfilIcon, BackIcon, SearchIcon } from '../components/Icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from "../screens/SearchScreen";
import MapasScreen from "../screens/MapasScreen";
import PerfilScreen from "../screens/PerfilScreen";


const HomeStackNavigator = (props)=>{
    return(
    <Stack.Navigator         
        initialRouteName="Home"         
        >
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
    </Stack.Navigator>
    )
}

const BuscarStackNavigator = (props) => {
        return (
          <Stack.Navigator >
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,   
                  headerRight: () => <PerfilIcon {...props}/>,                                            
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

const MapasStackNavigator = (props) => {
        return (
          <Stack.Navigator >
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,   
                  headerRight: () => <PerfilIcon {...props}/>,                                            
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

 const PerfilStackNavigator = (props) => {
        return (
          <Stack.Navigator >
            <Stack.Screen 
                options={{
                  headerLeft: () => <BackIcon {...props}/>,   
                  headerRight: () => <PerfilIcon {...props}/>,                                            
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
export const AppStack = () => {  
  return (
    <Tab.Navigator     
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        tabBarLabel:() => {return null},        
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home-lightbulb',
            Buscar: 'home-search',
            Mapas: 'map-marker-radius',
            Perfil: 'account'
  
          };
    
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={begguTheme.COLORS.DEFAULT}
              size={35}
            />
          );
        },
      })} 
    >
    <Tab.Screen name="Home" component={HomeStackNavigator}/>
    <Tab.Screen name="Mapas" component={MapasStackNavigator}/>
    <Tab.Screen name="Buscar" component={BuscarStackNavigator}/>
    <Tab.Screen name="Perfil" component={PerfilStackNavigator} />         
    </Tab.Navigator>
  );

};