import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./slices/contadorSlice"
import tareasReducer from "./slices/tareasSlices"
import registrosReducer from "./slices/registrarSlice"

export const store = configureStore({
    reducer:{
        contador: contadorReducer,
        tareas: tareasReducer,
        registros: registrosReducer

    }
})