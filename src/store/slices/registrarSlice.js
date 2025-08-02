import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    listaRegistros: []
}

export const registrarSlice = createSlice({
    name: 'registrar',
    initialState,   
    reducers: {
        agregarRegistro: (state, action) => {
            state.listaRegistros.push(action.payload);
        },
        eliminarRegistro: (state, action) => {
            state.listaRegistros = state.listaRegistros.filter(registro => registro.id !== action.payload.id);
        }
    }
});

export const { agregarRegistro, eliminarRegistro } = registrarSlice.actions;
export default registrarSlice.reducer;
