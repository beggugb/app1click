const initialState = {
    data:[],    
    latitude: 0, 
    longitude: 0
}

export function mapas(state = initialState, action){
    switch(action.type){
      case "SET_MAPAS":
        return {
          ...state,
          data: action.payload                
          
      }
      case "SET_LOCATION":
        return {
          ...state,                          
          latitude:action.nlatitude,
          longitude:action.nlongitude
      }      
      case "RESET_DATA":
        return {
         ...state,
         data: []
       }      
      
        default:
            return state
    }
}

