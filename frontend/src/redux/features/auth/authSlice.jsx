import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = true;
        },
        logout: (state, action) => {
            state.isAuth = false;
        },
    }
})

export const {setAuth, logout} = authSlice.actions;
export default authSlice.reducer;