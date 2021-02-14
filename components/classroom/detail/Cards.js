import { Typography, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
const useStyle = makeStyles({
    img: {
        borderRadius: "30px",
    },
    grid: {
        margin: 5
    }
})

const Cards = () => {
    const classes = useStyle();
    return (
        <>
            <Typography variant="body1">Recent Assesment</Typography>
            <Grid
                container
                spacing={1}
                justify="center"
                alignItems="center"
                alignContent="center"

            >
                <Grid item className={classes.grid}>
                    <Image src="/images/profile-background.jpg" width={350} height={200} className={classes.img} />
                </Grid>
                <Grid item className={classes.grid}>
                    <Image src="/images/profile-background.jpg" width={350} height={200} className={classes.img} />
                </Grid>
            </Grid>
        </>
    )
}

export default Cards
