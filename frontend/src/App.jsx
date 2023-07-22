import "./App.css"
import Home from "./pages/home/Home.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import SignInSide from "./pages/login/Login.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setAuth} from "./features/auth/authSlice.jsx";

export function App() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(setAuth());
        }
    }, [])

    return (
        <Routes>
            {/*<Route path='/login' element={!auth.isAuth ? <SignInSide/> : <Navigate to='/' replace/>}/>*/}
            {/*{auth.isAuth ? (*/}
            {/*    <Route path='/' element={<Home/>}>*/}
            {/*        */}
            {/*    </Route>*/}
            {/*) : <Route path='*' element={<Navigate to='/login' replace/>}/>}*/}
            <Route path='/login' element={<SignInSide/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    );
}

export default App