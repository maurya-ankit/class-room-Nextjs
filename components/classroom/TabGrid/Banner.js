import { makeStyles, Paper, Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
import Image from 'next/image'
const useStyle = makeStyles({
    root: {
        backgroundColor: "#cfd8dc",
    },
    baner: {
        margin: 20,
        padding: 20,
    },
    image: {
        borderRadius: "15%",
    },
    style: {
        marginTop: 10,
        marginBottom: 10,
    },
})

const Banner = () => {
    const classes = useStyle();
    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <Grid container spacing={1}
                    className={classes.baner}
                >
                    <Grid item md={7}>
                        <Typography variant="h4" className={classes.style} > Spring 2021</Typography>
                        <Typography variant="h4" className={classes.style}> New Year</Typography>
                        <Typography variant="subtitle1" className={classes.style}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quas odio, corporis autem distinctio est sed possimus? Impedit, officiis voluptatum.</Typography>
                        <Button variant="outlined" color="primary" className={classes.style}>
                            Enter
                        </Button>

                    </Grid>
                    <Grid item>
                        <Image src="/images/Profile-Pic.jpg" height={200} width={200} className={classes.image} />
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Banner
