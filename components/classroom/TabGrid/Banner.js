import { makeStyles, Paper, Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
import Image from 'next/image'
const useStyle = makeStyles({
    root: {
        backgroundColor: "#cfd8dc",
        borderRadius: 20
    },
    baner: {
        margin: 20,
        padding: 20,
    },
    image: {
        // borderRadius: "15%",
    },
    style: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    gridImage: {
        marginLeft: 50,
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={1}
                    className={classes.baner}
                >
                    <Grid item md={7}>
                        <Typography variant="h4" className={classes.style} > Spring 2021</Typography>
                        <Typography variant="h4" className={classes.style}> New Year</Typography>
                        <Typography variant="subtitle1" className={classes.style}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quas odio, corporis autem distinctio est sed possimus? Impedit, officiis voluptatum.</Typography>
                        <Button variant="contained" color="secondary" className={classes.style} aria-label="Enter in Classroom">
                            Enter
                        </Button>

                    </Grid>
                    <Grid item className={classes.gridImage}>
                        <Image src="/images/undraw_education_f8ru.svg" height={250} width={250} className={classes.image} alt="undra svg" />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Banner
