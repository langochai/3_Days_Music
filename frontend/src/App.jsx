import "./App.css"
import Home from "./pages/home/Home.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import SignInSide from "./pages/login/Login.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAuth} from "./redux/features/auth/authSlice.jsx";
import SignUp from "./pages/register/Register.jsx";
import ManagerSong from "./pages/admin/ManagerSong.jsx";

export function App() {
    const dispatch = useDispatch();
    const userLoginJSON = localStorage.getItem('userLogin');
    const userLogin = JSON.parse(userLoginJSON);
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
            <Route path='/register' element={<SignUp/>}/>
            {userLogin && userLogin.role === 'admin' ? (
                <Route path='/admin/list-song' element={<ManagerSong/>}/>
            ) : (
                <Route path="*" element={<Navigate to="/"/>}/>
            )}
        </Routes>
    );
}

export default App