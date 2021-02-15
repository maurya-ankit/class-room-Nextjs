import { Button, Typography, Grid, InputBase, Divider, IconButton } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
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


const Posts = () => {
    const classes = useStyles();
    const posts = [{ "title": "First Post", "view": 22, "Posted": "12:00 IST", "author": "Ankit Maurya" }, { "title": "Announsment Post", "view": 22, "Posted": "12:00 IST", "author": "Amit Maurya" }, { "title": "Exam Timing", "view": 22, "Posted": "12:00 IST", "author": "Ayush Khare" }, { "title": "Class Reschedule", "view": 22, "Posted": "12:00 IST", "author": "Shreyash Nigam" }, { "title": "Assignment 1", "view": 22, "Posted": "12:00 IST", "author": "Akash Kumar" }];
    return (
        <>
            <Typography variant="body1" className={classes.title}>Recent Posts</Typography>

            {posts.map((post, index) => (
                <Grid container spacing={1} className={classes.div} key={index} component={Button} aria-label="post list">
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
                        <Grid item md={3}>
                            <SupervisedUserCircleIcon />
                            <Typography variant="body1">{post.view}</Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item md={3}>
                            <ScheduleIcon />
                            <Typography variant="body1">{post.Posted}</Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem />

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
            ))}
        </>
    )
}

export default Posts


