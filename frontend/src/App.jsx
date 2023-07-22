import "./App.css"
import Home from "./pages/home/Home.jsx";
import { Route, Routes} from "react-router-dom";
import SignInSide from "./pages/login/Login.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAuth} from "./features/auth/authSlice.jsx";

export function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(setAuth());
        }
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<SignInSide/>}/>
        </Routes>
    );
}

export default App