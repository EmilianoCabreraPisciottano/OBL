import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    listEvaluaciones: []
};

export const agregarEvaluacionSlice = createSlice({
    name: 'agregarEvaluacion',
    initialState,
    reducers: 
    {
    agregarEvaluacion : (state, action) => { 
        state.listEvaluaciones.push(action.payload);    
    }  

}

});
export const { agregarEvaluacion } = agregarEvaluacionSlice.actions;
export default agregarEvaluacionSlice.reducer;

