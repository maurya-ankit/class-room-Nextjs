import Layout from '../components/layout/classroom/Layout'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import GoogleLogin from 'react-google-login';
import googleLogin from '../backend/googleLogin'
const useStyles = makeStyles((theme) => ({
    signupGrid: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: theme.palette.alternate.dark,
        padding: 30,
        borderRadius: 20
    },
    div: {
        marginTop: theme.spacing(8),
        background: theme.palette.alternate.main,
        padding: 30,
        borderRadius: 20
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Signin = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.apiBaseUrl}/auth/login/`, { "username": username, "password": password })
            .then(response => {
                console.log(response.data)
                cookieCutter.set('authToken', response.data.token)
                console.log(cookieCutter.get('authToken'))
            })
            .catch(err => console.log(err))
    }
    const googleResponse = (response) => {
        console.log(response);
    }
    const responseGoogle = async (response) => {
        const googleResponse = await googleLogin(response.accessToken)
        // cookieCutter.set('authToken', googleResponse.data.key)
        setCookie("authToken", googleResponse.data.key, { path: '/' });
        console.log(googleResponse);
        setCookie("profileObj", response.profileObj, { path: '/', });
        console.log(cookies.profileObj);
    }
    return (
        // <Layout>
        <Container maxWidth="lg">
            <Grid
                container
                spacing={5}
                justify="center"
                alignItems="center"
                alignContent="center"
                className={classes.div}

            >

                <Grid item md>
                    <Grid container spacing={1} direction="column" className={classes.signupGrid}>
                        <Grid item>
                            <Typography variant="h3" color="initial">Sign In</Typography>
                            <Typography variant="subtitle1" color="initial">Sign in to use Classroom</Typography>
                        </Grid>
                        <Grid item >
                            <form className={classes.form} noValidate onSubmit={e => handleSubmit(e)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="username"
                                            label="Username"
                                            name="username"
                                            autoComplete="username"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                    </Button>
                                <GoogleLogin
                                    clientId="989570240317-nmknp4u5mpitqe2gjkkhuh0sgpp9trj0.apps.googleusercontent.com"
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                />
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/signup">
                                            Don't have an account? Sign up
                                            </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={6}>
                    <Image src='/images/undraw_Login_re_4vu2.svg' height="400" width="400" />
                </Grid>
            </Grid>
        </Container>
        // </Layout>
    )
}

export default Signin
