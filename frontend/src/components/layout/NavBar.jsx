import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/auth/authSlice.jsx";

export default function NavBar() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/login');
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: "#121212"}}>
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
                    {!auth.isAuth ? (
                        <Link to='/login'>
                            <Button color="inherit">Login</Button>
                        </Link>
                    ) : (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    );
}