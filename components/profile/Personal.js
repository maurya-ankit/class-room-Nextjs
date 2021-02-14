import React from 'react'
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image'


const useStyle = makeStyles({
    root: {
        padding: 10,
    },
    profilePic: {
        borderRadius: "50%",
    },
    space: {
        marginTop: 5,
        marginBottom: 5,
    }
})
const Personal = () => {
    const classes = useStyle();
    return (
        <Container maxWidth="xs" className={classes.root}>
            <Image src="/images/Profile-Pic.jpg" width={200} height={200} className={classes.profilePic} />
            <Grid container
                justify="space-around"
                alignContent="center"
                alignItems="center"
                className={classes.space}
            >
                <Grid item >
                    <Typography variant="h4">Ankit Maurya</Typography>
                    <Typography variant="subtitle1">Student</Typography>
                    <Typography variant="subtitle2">IIIT Pune</Typography>
                </Grid>


            </Grid>
            <Grid container
                justify="center"
                alignContent="center"
                alignItems="center"
                spacing={2}
                className={classes.space}
            >
                <Grid item md={4}>
                    <Typography variant="subtitle1">412</Typography>
                    <Typography variant="subtitle2">followers</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item md>
                    <Typography variant="subtitle1">510</Typography>
                    <Typography variant="subtitle2">following</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item md={4}>
                    <Typography variant="subtitle1">1000</Typography>
                    <Typography variant="subtitle2">students taught</Typography>
                </Grid>
            </Grid>
            <Typography variant="body2" className={classes.space}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit corporis ea ratione velit quos eos unde tempora obcaecati, facilis temporibus.</Typography>

            <IconButton aria-label="twitter" color="primary">
                <TwitterIcon />
            </IconButton>
            <IconButton aria-label="facebook icon" color="primary">
                <FacebookIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="github icon">
                <GitHubIcon />
            </IconButton>

        </Container>
    )
}

export default Personal
