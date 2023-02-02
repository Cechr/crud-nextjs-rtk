import { configureStore } from '@reduxjs/toolkit'
import perfilReducer from "@/redux/reducers/perfilSlice";

export const store = configureStore({
    reducer: {
        perfil: perfilReducer
    }
})