import { Button, Typography, Grid, InputBase, Divider, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
import Link from 'next/link'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import getInstance from '../../../backend/api'
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    title: {
        margin: 10,
        color: "#a23123"
    },
    div: {
        background: theme.palette.alternate.dark,
        padding: 20,
        borderRadius: 20,
        marginBottom: 10,
    },
}));


const Posts = (props) => {
    const classes = useStyles();
    const { classroom, posts } = props;
    return (
        <>
            {posts && <><Typography variant="body1" className={classes.title}>Recent Posts</Typography>

                { posts.map((post, index) => (
                    <Link href={`/classroom/${classroom.id}/${post.id}`} key={index}>
                        <Grid container spacing={1} className={classes.div} component={Button} aria-label="post list">
                            <Grid container spacing={1}
                                alignContent="center"
                                alignItems="center"
                            >
                                <Grid item>
                                    <Image src="/images/undraw_Questions_re_1fy7.svg" height={50} width={50} alt="undraw svg" />


                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">{post.title}</Typography>
                                </Grid>

                            </Grid>
                            <Grid container spacing={1}
                                alignContent="center"
                                alignItems="center"
                                justify="center"
                            >

                                {/* <Grid item md={3}>
                                <SupervisedUserCircleIcon />
                                <Typography variant="body1">{post.view}</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item md={3}>
                                <ScheduleIcon />
                                <Typography variant="body1">{post.Posted}</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem /> */}

                                <Grid item md>

                                    <AccountCircleIcon md={2} />
                                    <Typography variant="body1">{post.author}</Typography>
                                </Grid>
                                {/* <Grid item>
                            <IconButton>
                                <NavigateNextIcon />
                            </IconButton>
                        </Grid> */}

                            </Grid>

                        </Grid>
                    </Link>
                ))}
            </>
            }
        </>
    )
}

export default Posts


