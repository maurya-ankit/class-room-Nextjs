import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, IconButton, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyle = makeStyles({
    grid: {
        margin: 10,
        padding: 10,
    },
    img: {
        borderRadius: "10%",
    },
    icon: {
        position: "absolute",
        marginLeft: -47,
    }
})

const Items = () => {
    const classes = useStyle();
    const images = ["First", "Second", "Third", "Fourth", "Fifth", "sixth", "seventh"]
    const [x, setX] = React.useState(0);
    return (
        <>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="space-between"

            >
                <Grid item>
                    <Typography style={{ marginLeft: 20 }}>Popular Now</Typography>
                </Grid>
                <Grid item md>

                </Grid>
                <Grid item>
                    <Button color="secondary">View More</Button>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"

            >
                {images.map((image) =>
                    <Grid item className={classes.grid} key={image}>
                        <Image src="/images/Profile-Pic.jpg" height={200} width={200} className={classes.img} />
                        <IconButton className={classes.icon} onClick={() => setX(Math.random())}>
                            {x > 0.5 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                        </IconButton>
                    </Grid>
                )}

            </Grid>
        </>
    )
}

export default Items
