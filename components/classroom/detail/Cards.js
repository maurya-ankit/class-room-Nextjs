import { Typography, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
const useStyle = makeStyles((theme) => ({
    div: {
        background: theme.palette.secondary.main,
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    img: {
        borderRadius: "20px",
    },
    grid: {
        margin: 5
    },
    title: {
        margin: 20,
        color: "#a23123"
    }
}))

const Cards = () => {
    const classes = useStyle();
    return (
        <>
            <Typography variant="body1" className={classes.title}>Recent Assesment</Typography>

            <div className={classes.div}>
                <Grid
                    container
                    spacing={1}
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="nowrap"

                >
                    <Grid item className={classes.grid}>
                        <Image src="/images/undraw_Short_bio_re_fmx0.svg" width={350} height={200} className={classes.img} alt="undraw svg" />
                    </Grid>
                    <Grid item className={classes.grid}>
                        <Image src="/images/undraw_building_websites_i78t.svg" width={350} height={200} className={classes.img} alt="undraw svg" />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Cards
