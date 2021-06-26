const initialState = {
    data:[],
    pagina:0,
    paginas:0,
    item:{
      id: '',
      label:'',
      icono:''
    },   
}

export function categorias(state = initialState, action){
    switch(action.type){
      case "GET_CATEGORIAS":
       return {
         ...state,
         data: action.payload
      }
      case "RESET_CATEGORIAS_DATA":
       return {
         ...state,
         data: []
      } 
      case "SET_CATEGORIA":
       return {
         ...state,
         item: action.item
      }
         
      default:
            return state
    }
}

