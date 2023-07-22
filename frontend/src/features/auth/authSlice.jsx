import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userLogin: {}
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = true;
        },
        logout: (state, action) => {
            state.isAuth = false;
            state.userLogin = {};
        }
    }
})

export const {setAuth, logout} = authSlice.actions;
export default authSlice.reducer;