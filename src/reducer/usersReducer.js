const initialState = {
    isLoading: true,
    user: {},
    userToken: null,
    userId:0,
    signIn: false,
    loading: false,
    mensaje: ''
}

export function users(state = initialState, action){
    switch(action.type){      
      case 'RETRIEVE_TOKEN': 
        return {
          ...state,
          userToken: action.token,
          userId: action.userId,
          isLoading: false,
        };
      case 'LOGIN_SUCCESS': 
        return {
          ...state,
          user: action.result.user,
          userToken: action.result.token,
          mensaje: action.result.message,
          isLoading: false,
          signIn:true
        };
      case 'LOGOUT': 
        return {
          ...state,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'GET_USUARIO': 
        return {
          ...state,
          user: action.payload
        };  
      case 'SET_TOKEN': 
        return {
          ...state,          
          userToken: action.token,
          isLoading: true
        };
      case 'SET_USER': 
        return {
          ...state,          
          user: action.response,
          isLoading: true
        };    
      case "SET_LOADING":
        return {
          ...state,                                    
          loading: action.state
      };  
        default:
            return state
    }
}

