import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nombre: 'Hola Mundo',
}

export const perfilSlice = createSlice({
    name: 'perfil',
    initialState,
    reducers: {
        SET_NOMBRE: (state, action) => {
            state.nombre = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { SET_NOMBRE } = perfilSlice.actions

export default perfilSlice.reducer