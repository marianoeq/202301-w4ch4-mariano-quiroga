import { createContext } from "react";
import { usePhone } from "../hooks/usePhone";

//notacion de tipo
export type usePhoneStructure = ReturnType<typeof usePhone>;

//Aca estoy creando un contexto. Lo cual es un objeto.
export const AppContext = createContext({} as usePhoneStructure);
