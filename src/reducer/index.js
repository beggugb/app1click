import { combineReducers } from "redux";
import { clientes } from "./clientesReducer";
import { mapas } from "./mapasReducer";
import { users } from "./usersReducer";
import { sucursales } from "./sucursalesReducer";
import { categorias } from "./categoriasReducer";

const rootReducer = combineReducers({
  clientes,
  users,
  mapas,
  sucursales,
  categorias
});

export default rootReducer;
