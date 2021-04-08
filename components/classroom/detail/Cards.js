import { Typography, Grid, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import getInstance from '../../../backend/api'
import Skeleton from '@material-ui/lab/Skeleton';

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

const Cards = (props) => {
    const classes = useStyle();
<<<<<<< HEAD
    const [classroom, setClassroom] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        getInstance.get(`classroom/${props.classroomId}`,)
            .then(response => {
                setClassroom(response.data);
                console.log(response.data);
                setLoading(false)
            })
            .catch(err => console.warn(err))
    }, [])
=======
    const { classroom } = props;
>>>>>>> 850802202f74ed9e8be03897c0053b2792581b99
    return (
        <>
            <Typography variant="body1" className={classes.title}>Recent Assesment</Typography>

            <div className={classes.div}>
                <Grid
                    container
                    spacing={1}
                    justify="space-around"
                    alignItems="center"
                    alignContent="center"
                    wrap="nowrap"

                >
                    <Grid item className={classes.grid}>
                        <Image src="/images/undraw_Short_bio_re_fmx0.svg" width={350} height={200} className={classes.img} alt="undraw svg" />
                    </Grid>
                    <Grid item className={classes.grid}>
                        {loading ?
                            <>
                                <Skeleton animation="wave" height={10} width="40%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="40%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="40%" style={{ marginBottom: 6 }} />
                            </>
                            : <>
                                <Typography variant="subtitle1" className={classes.style} > class id:{" "}{classroom.id} </Typography>
                                <Typography variant="h5" className={classes.style}>{classroom.name} </Typography>
                                <Typography variant="subtitle2" className={classes.style} color="textSecondary"> Total Mamber:{" "}{classroom.total_members} </Typography>
                            </>
                        }


                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Cards
