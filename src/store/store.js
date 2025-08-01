import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./slices/contadorSlice"
import tareasReducer from "./slices/tareasSlices"

export const store = configureStore({
    reducer:{
        contador: contadorReducer,
        tareas: tareasReducer
    }
})