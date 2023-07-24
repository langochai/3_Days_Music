import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/features/auth/authSlice.jsx";

export default function NavBar() {
    const auth = useSelector(state => state.auth);
    const userLoginJSON = localStorage.getItem('userLogin');
    const userLogin = JSON.parse(userLoginJSON);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userLogin');
        dispatch(logout());
        navigate('/login');
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: "#121212",marginLeft: "240px" , borderRadius: "20px 20px 0px 0px" ,width : "1262px"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Menu
                    </Typography>
                    {userLogin && <p>{userLogin.lastName}</p>}
                    {!auth.isAuth ? (
                        <Link to='/login'>
                            <Button color="inherit" sx={{textDecoration: 'none', color: "white"}}>Login</Button>
                        </Link>
                    ) : (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    );
}