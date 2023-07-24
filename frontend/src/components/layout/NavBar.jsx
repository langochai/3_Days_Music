import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import AccountMenu from "../AccountMenu.jsx";

export default function NavBar() {
    const auth = useSelector(state => state.auth);

    return (
        <Box sx={{flexGrow: 1, marginLeft: "330px", marginBottom: "10px", position: "fixed", width: "80%"}}>
            <AppBar position="static" sx={{backgroundColor: "rgba(4, 4, 4,0.9)"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    </Typography>
                    {!auth.isAuth ? (
                        <>
                            <Link to='/register'>
                                <Button color="inherit"
                                        sx={{
                                            backgroundColor: "black",
                                            borderRadius: "30px",
                                            color: "#fffa",
                                            textDecoration: "none",
                                            width: "120px",
                                            height: "55px",
                                            '&:hover': {
                                                backgroundColor: "black",
                                                color: "white",
                                            },
                                        }}
                                >
                                    <b>Sign up</b>
                                </Button>
                            </Link>
                            <Link to='/login'>
                                <Button color="inherit"
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: "30px",
                                            color: "black",
                                            textDecoration: "none",
                                            width: "120px",
                                            height: "55px",
                                            '&:hover': {
                                                backgroundColor: "white",
                                                color: "black",
                                                height: "60px",
                                                width: "125px",
                                            },
                                        }}
                                >
                                    <b>Log in</b>
                                </Button>
                            </Link></>
                    ) : (
                        <AccountMenu/>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}