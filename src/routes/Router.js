import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import {Loading} from '../components/Loading';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export const Router = () => {
  const { userToken, loading } = useSelector(state => state.users) 
  if (loading) {
    return <Loading />;
  }
  console.log(userToken)
 return(
    <NavigationContainer>
    { userToken ? <AppStack/> : <AuthStack/> }
    </NavigationContainer>
    );
};


