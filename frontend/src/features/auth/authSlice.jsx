import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userLogin: {
            email: '',
            role: ''
        }
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = true;
        },
        logout: (state, action) => {
            state.isAuth = false;
            state.userLogin = {};
        },
        setUserLogin: (state, action) => {
            state.userLogin = action.payload;
        }
    }
})

export const {setAuth, logout, setUserLogin} = authSlice.actions;
export default authSlice.reducer;