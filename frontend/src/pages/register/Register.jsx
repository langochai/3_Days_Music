import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useState} from "react";
import AuthService from "../../services/auth.service.jsx";
import {Link as RouterLink} from "react-router-dom";
import {Alert} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();
const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

export default function SignUp() {
    const [message, setMessage] = useState('');
    const formSignUp = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: SignUpSchema,
        onSubmit: values => {
            let data = {
                firstName: values.firstName,
                lastName: values.lastName,
                username: values.email,
                password: values.password,
            }
            AuthService.register(data)
                .then(res => {
                    showMessage(res.data.message);
                })
                .catch(err => {
                    showMessage(err);
                })
        }
    })
    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <ThemeProvider theme={defaultTheme} sx={{backgroundColor: "black"}}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div style={{backgroundColor: "rgba(255, 255, 255,0.9)", borderRadius : "20px", color:"black", marginTop: "100px", padding: "10px" }}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin : "20px 20px 20px 20px",
                            "&.form-container": {
                                position: "relative",
                                zIndex: 1,
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "4px",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                            },

                        }}
                    >
                        <img
                            src="background-spotify.jpg"
                            alt="Background"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                            }}
                        />
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <img src="logo.png" alt="error" style={{width: '60px'}}/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={formSignUp.handleSubmit} sx={{mt: 3}}>
                            {message.name === 'AxiosError'
                                ? <Alert severity='error'>{message.response.data.message}</Alert>
                                : message === ''
                                    ? null
                                    : <Alert severity="success">{message}</Alert>}
                            <br/>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        InputLabelProps={{ style: { color: 'black' } }}
                                        InputProps={{
                                            style: { color: 'black', border: '1px solid black' },
                                            inputProps: { style: { color: 'black' } },
                                        }}
                                        onChange={formSignUp.handleChange}
                                        value={formSignUp.values.firstName}
                                        error={formSignUp.errors.firstName && formSignUp.touched.firstName}
                                        helperText={formSignUp.errors.firstName && formSignUp.touched.firstName ? formSignUp.errors.firstName : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        InputLabelProps={{ style: { color: 'black' } }}
                                        InputProps={{
                                            style: { color: 'black', border: '1px solid black' },
                                            inputProps: { style: { color: 'black' } },
                                        }}
                                        onChange={formSignUp.handleChange}
                                        value={formSignUp.values.lastName}
                                        error={formSignUp.errors.lastName && formSignUp.touched.lastName}
                                        helperText={formSignUp.errors.lastName && formSignUp.touched.lastName ? formSignUp.errors.lastName : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        InputLabelProps={{ style: { color: 'black' } }}
                                        InputProps={{
                                            style: { color: 'black', border: '1px solid black' },
                                            inputProps: { style: { color: 'black' } },
                                        }}
                                        onChange={formSignUp.handleChange}
                                        value={formSignUp.values.email}
                                        error={formSignUp.errors.email && formSignUp.touched.email}
                                        helperText={formSignUp.errors.email && formSignUp.touched.email ? formSignUp.errors.email : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        InputLabelProps={{ style: { color: 'black' } }}
                                        InputProps={{
                                            style: { color: 'black', border: '1px solid black' },
                                            inputProps: { style: { color: 'black' } },
                                        }}
                                        onChange={formSignUp.handleChange}
                                        value={formSignUp.values.password}
                                        error={formSignUp.errors.password && formSignUp.touched.password}
                                        helperText={formSignUp.errors.password && formSignUp.touched.password ? formSignUp.errors.password : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                        label="I agree to the terms of use"
                                        style={{ color: 'black' }}
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2, backgroundColor: 'green'}}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <RouterLink to='/login' style={{color : "black"}}>
                                        Already have an account? Sign in
                                    </RouterLink>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
                <Copyright sx={{mt: 5,color : "white"}}/>
            </Container>
        </ThemeProvider>
    );
}