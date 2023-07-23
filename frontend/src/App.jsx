import "./App.css"
import Home from "./pages/home/Home.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import SignInSide from "./pages/login/Login.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAuth} from "./features/auth/authSlice.jsx";
import SignUp from "./pages/register/Register.jsx";
import ListSong from "./components/admin/listSong.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import Admin_listSong from "./pages/home/Admin_listSong.jsx";

export function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(setAuth());
        }
    }, [])

    return (
        <>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<SignInSide/>}/>
                <Route path='/register' element={<SignUp/>}/>
                <Route path='/admin/list-song' element={<Admin_listSong/>}/>
                <Route path="*"  element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App