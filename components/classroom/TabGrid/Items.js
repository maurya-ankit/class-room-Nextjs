import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, IconButton, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from 'next/link'
const useStyle = makeStyles((theme) => ({
    grid: {
        background: theme.palette.secondary.main,
        margin: 10,
        padding: 10,
        borderRadius: 20
    },
    img: {
        borderRadius: "10%",
    },
    icon: {
        position: "absolute",
        marginLeft: -47,
    },
    btn: {
        borderRadius: 10,
    },
    div: {
        background: theme.palette.secondary.main,
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
}))

const Items = (props) => {
    const { data } = props;
    const classes = useStyle();
    const images = ["First", "Second", "Third", "Fourth", "Fifth", "sixth", "seventh"]
    return (
        <>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="space-between"

            >
                <Grid item>
                    <Typography style={{ marginLeft: 20 }}>All Classrooms</Typography>
                </Grid>
                <Grid item md>

                </Grid>
                {/* <Grid item>
                    <Button color="primary" variant="outlined" className={classes.btn} aria-label="View More">View More</Button>
                </Grid> */}
            </Grid>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="center"
                alignContent="center"

            >
                {data.map((classroom) =>
                    <Link href={`/classroom/${classroom.id}`} key={classroom.id}>
                        <Grid item className={classes.grid} md={5} component={Button}>
                            <Grid
                                container
                                spacing={1}
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                alignContent="center"
                                style={{ marginInline: 5 }}
                                wrap="nowrap"

                            >
                                <Grid item md>
                                    <Image src="/images/undraw_Publish_article_re_3x8h.svg" height={200} width={200} className={classes.img} alt="classroom grids" />
                                </Grid>
                                <Grid item md>
                                    <Typography variant="subtitle1" className={classes.style} > class id {classroom.id}</Typography>
                                    <Typography variant="h5" className={classes.style}> {classroom.name}</Typography>
                                    <Typography variant="subtitle2" className={classes.style} color="textSecondary"> Total Mamber :{classroom.total_members}</Typography>


                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>
                )}

            </Grid>
        </>
    )
}



export default Items


