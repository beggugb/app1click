const initialState = {
    data:[]   
}

export function sucursales(state = initialState, action){
    switch(action.type){
      case "SET_SUCURSALES":
        return {
          ...state,
          data: action.payload                
          
      }      
      default:
            return state
    }
}

