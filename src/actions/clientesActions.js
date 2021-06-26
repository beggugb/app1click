import {clientesApi} from '../api'

export const clientesActions = {
    getData,
    getDatas,    
    getItem,
    getMapas,
    getSearch,
    getCategorias,
    searchCategorias,
    registro,
    login,
    getUsuario,
    updateUsuario,
    getFuser
  };

  function getFuser(token) {
    return (dispatch) => {           
        clientesApi
        .getFuser(token)
        .then((response)=>{          
          console.log(response)
        })
      .catch((err)=>{
        console.log(err)
      })
    };
  }

  function updateUsuario(data) {
    return (dispatch) => { 
        dispatch({ type: 'SET_LOADING', state: true });
      clientesApi
      .updateUsuario(data)
      .then((response)=>{                                   
        console.log(response)
        dispatch({ type: 'SET_LOADING', state: false });;
      })
      .catch((err)=>{
        console.log(err)
      })
    };
  }

  function registro(data) {
    return (dispatch) => { 
      dispatch({ type: 'SET_LOADING', state: true });
      clientesApi
      .registro(data)
      .then((response)=>{                                   
      dispatch(pRegistro(response))           
      dispatch({ type: 'SET_TOKEN', userToken: response.usuario.token });           
      dispatch({ type: 'SET_LOADING', state: false }); 
      })
      .catch((err)=>{
        console.log(err)
      })
    };
  }

  export function pRegistro(response) {
    return {
      type: 'SET_REGISTRO',
      payload: response
    };
  }

  function searchCategorias(page,num,categoria,estado,nombre) {    
    return (dispatch) => {            
      dispatch({ type: 'SET_LOADING', state: true });
      clientesApi
      .getData(page,num,categoria.id,estado,nombre)
      .then((response)=>{                           
        dispatch(setDatas(response.result, categoria))
        dispatch({ type: 'SET_CATEGORIA', item: categoria }); 
        dispatch({ type: 'SET_LOADING', state: false });
      })
      .catch((err)=>{
        console.log(err)
      })
    };
  }
  export function setDatas(response, item) {
    return {
      type: 'SEARCH_CATEGORIA',
      payload: response
    };
  }

   function getCategorias() {
    return (dispatch) => {  
    dispatch({ type: 'SET_LOADING', state: true });          
      clientesApi
      .getCategorias()
      .then((response)=>{                           
        dispatch(pCategorias(response.result))      
        dispatch({ type: 'SET_LOADING', state: false });          
      })
      .catch((err)=>{
        console.log(err)
        dispatch({ type: 'SET_LOADING', state: false }); 
      })
    };
  }

  export function pCategorias(response) {
    return {
      type: 'GET_CATEGORIAS',
      payload: response
    };
  } 

   function login(user) {    
    return (dispatch) => {      
      dispatch({ type: 'SET_LOADING', state: true });   
      clientesApi
        .login(user)
        .then((response) => {                    
          dispatch(LOGIN(response.result));                                
          dispatch({ type: 'SET_LOADING', state: false });                  
        })
        .catch((err) => {          
          dispatch({ type: 'SET_LOADING', state: false });  
        });
    };
  }

  export function LOGIN(result) {
    return {
      type: "LOGIN_SUCCESS",
      result: result
    };
  }

  function getItem(itemId) {
    return (dispatch) => {     
      dispatch({ type: 'SET_LOADING', state: true });        
        clientesApi
        .getItem(itemId)
        .then((response)=>{          
        
          dispatch(pItem(response))
          dispatch(pSucursal(response))                
          dispatch({ type: 'SET_LOADING', state: false });
        })
      .catch((err)=>{
        dispatch({ type: 'SET_LOADING', state: false });
      })
    };
  }

  export function pItem(response) {    
    return {
      type: 'GET_ITEM',
      payload: response.cliente      
    };
  }  

  export function pSucursal(response) {    
    return {
      type: 'SET_SUCURSALES',
      payload: response.sucursales      
    };
  }  

  
  function getData(page,num,categoriaId,estado,nombre) {
    return (dispatch) => {           
     dispatch({ type: 'SET_LOADING', state: true });
      clientesApi
      .getData(page,num,categoriaId,estado,nombre)
      .then((response)=>{                                 
        dispatch(pData(response.result))        
        dispatch({ type: 'SET_LOADING', state: false });
      })
      .catch((err)=>{
     dispatch({ type: 'SET_LOADING', state: false });
      })
    };
  }
  function getDatas(page,num,categoriaId,estado,nombre) {
    return (dispatch) => {     
    dispatch({ type: 'SET_LOADING', state: true });            
      clientesApi
      .getData(page,num,categoriaId,estado,nombre)
      .then((response)=>{            
        dispatch(pData(response.result))       
        dispatch({ type: 'SET_LOADING', state: false }); 
      })
      .catch((err)=>{
      dispatch({ type: 'SET_LOADING', state: false });
      })
    };
  }
  export function pData(response) {
   
    return {
      type: 'GET_DATA',
      payload: response
    };
  }

  function getSearch(page,num,categoriaId,estado,nombre) {
    return (dispatch) => {  
    dispatch({ type: 'SET_LOADING', state: true });                
      clientesApi
      .getData(page,num,categoriaId,estado,nombre)
      .then((response)=>{          
        dispatch(pSearch(response.result))      
        dispatch({ type: 'SET_LOADING', state: false });  
      })
      .catch((err)=>{
        dispatch({ type: 'SET_LOADING', state: false });
      })
    };
  }
  export function pSearch(response) {
    return {
      type: 'GET_DATA_SEARCH',
      payload: response
    };
  }

  function getMapas(tipo) {
    return (dispatch) => {    
      /*dispatch(mBegin())        */
      clientesApi
      .getMapas(tipo)
      .then((response)=>{                    
        dispatch(pMapas(response.result))     
        dispatch({ type: 'SET_LOADING', state: false });  
        /*dispatch(mEnd())*/
      })
      .catch((err)=>{
        console.log(err)
      })
    };
  }

    export function pMapas(response) {
    return {
      type: 'SET_MAPAS',
      payload: response
    };
  }


    function getUsuario(itemId) {
    return (dispatch) => {     
      dispatch({ type: 'SET_LOADING', state: true });        
        clientesApi
        .getUsuario(itemId)
        .then((response)=>{                    
          dispatch(pUsuario(response.result))          
          dispatch({ type: 'SET_LOADING', state: false }); 
        })
      .catch((err)=>{
        console.log(err)
      })
    };
  }


  export function pUsuario(response) {    
    return {
      type: 'GET_USUARIO',
      payload: response
    };
  } 


