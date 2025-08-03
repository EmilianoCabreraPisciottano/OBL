import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    listaRegistros: fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())  
        .then(data => data.map(user => ({
            id: user.id,
            nombre: user.name,
            email: user.email,
            pais: user.address.country
        })))
};

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
