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

const Signup = () => {
    const classes = useStyles();
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
                <Grid item md={6}>
                    <Image src='/images/undraw_secure_login_pdn4.svg' height="400" width="400" />
                </Grid>
                <Grid item md>
                    <Grid container spacing={1} direction="column" className={classes.signupGrid}>
                        <Grid item>
                            <Typography variant="h3" color="initial">Sign Up</Typography>
                            <Typography variant="subtitle1" color="initial">Sign up to use Classroom</Typography>
                        </Grid>
                        <Grid item >
                            <form className={classes.form} noValidate>
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
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
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
                                    Sign Up
                                    </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/signin">
                                            Already have an account? Sign in
                                            </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </Container>
        // </Layout>
    )
}

export default Signup
