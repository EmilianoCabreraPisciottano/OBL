import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./slices/contadorSlice"
import tareasReducer from "./slices/tareasSlices"
import registrosReducer from "./slices/registrarSlice"
import evaluacionesReducer from "./slices/evaluacionesSlice"
import agregarEvaluacionReducer from "./slices/AgregarEvaluacion";

export const store = configureStore({
    reducer:{
        contador: contadorReducer,
        tareas: tareasReducer,
        registros: registrosReducer,
        evaluaciones: evaluacionesReducer,
        agregarEvaluacion: agregarEvaluacionReducer

    }
})