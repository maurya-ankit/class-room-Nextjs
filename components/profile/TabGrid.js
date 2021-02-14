import React from 'react'
import { Toolbar, Button, Grid, makeStyles } from '@material-ui/core';
import Image from 'next/image'
const useStyle = makeStyles({
    btn: {
        marginInline: 10,
    },
    imgBox: {
        margin: 10,
        padding: 10,
        justify: "center"
    },
    img: {
        borderRadius: "10%",
    },
    item: {
        marginBottom: 10,
    }
})
const TabGrid = () => {
    const classes = useStyle();
    const tabs = ["Photo", "Galleries", "Groups", "About"]
    return (
        <React.Fragment>
            <Toolbar>
                <Grid container
                    justify="space-around"
                >
                    <Grid item md={8}>
                        {tabs.map((tab) =>
                            <Button key={tab} variant="outlined" className={classes.btn}>
                                {tab}
                            </Button>
                        )}
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="contained" color="primary">
                            Follow
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
            <Grid container
                justify="space-around"
                className={classes.imgBox}>
                {[1, 2, 3, 4, 5, 6].map((n) =>
                    <Grid item key={n} className={classes.item}>
                        <Image src="/images/Profile-Pic.jpg" width={200} height={200} className={classes.img} />
                    </Grid>
                )}


            </Grid>
        </React.Fragment>
    )
}

export default TabGrid
