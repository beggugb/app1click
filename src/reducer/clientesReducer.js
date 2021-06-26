const initialState = {
    data:[],
    pagina:0,
    paginas:0,  
    total:0,  
    item:{      
      Categorium: {
        "id": 0,
        "nombre": '',
      },
      Paquete: {
        "id": 0,
        "nombre": '',
      },
      "id": 0,
      "banner": "default.jpg",
      "categoriaId": "0",
      "celular": "",
      "coordenadas": "temporal",      
      "descripcion": "",
      "direccion": "",
      "email": "",
      "estado": true,
      "facebook": "",
      "filename": "default.jpg",
      "habilitado": true,
      "hestado": true,
      "hfin": "00:00:00",
      "hinicio": "00:00:00",
      "icon": null,      
      "instagram": null,
      "latitude": "",
      "longitude": "",
      "nombres": "",
      "paqueteId": "1",      
      "portada": "default.jpg",
      "registrado": true,
      "rolId": 1,
      "slider1": "default.jpg",
      "slider2": "default.jpg",
      "slider3": "default.jpg",
      "snum": "0",
      "telefono": "",
      "tipo": "",      
      "username": "",
      "video": "",
      "web": "",
    }      
}

export function clientes(state = initialState, action){
    switch(action.type){
      case "GET_DATA":
        return {              
          ...state,
          data: action.payload.pagina === 1 ? action.payload.data : [...state.data, ...action.payload.data],
          pagina: action.payload.pagina,
          paginas: action.payload.paginas,
          total: action.payload.total
      }
      case "GET_DATA_SEARCH":
        return {    
          ...state,      
          data: action.payload.data,
          pagina:action.payload.pagina,
          paginas:action.payload.paginas,
          total:action.payload.total                
      } 
      case "GET_ITEM":
        return {
          ...state,
          item: action.payload      
      }
      case "RESET_CLIENTE":
        return {
         ...state,
         data: [],
         item: initialState.item,
         pagina:0,
         paginas:0,  
         total:0,  
       }   
       case "RESET_CLIENTE_ITEM":
        return {
         ...state,         
         item: initialState.item
       } 
       case "RESET_CLIENTE_DATA":
        return {
         ...state,         
         data:[]
       } 
      case "SET_REGISTRO":
        return {
          ...state,          
          isRegistraionSuccess: true                
      }  
      case "SEARCH_CATEGORIA":
        return {
          ...state,     
          item: action.item,           
          data: action.payload.data,
          pagina:action.payload.pagina,
          paginas:action.payload.paginas,
          total:action.payload.total                
      }                 
      default:
            return state
    }
}

