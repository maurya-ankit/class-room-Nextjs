import { Button, Typography, Grid, InputBase, Divider, IconButton, Avatar } from '@material-ui/core'
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
import Skeleton from '@material-ui/lab/Skeleton';

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
    const [posts, setPosts] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [update, setUpdate] = useState(false);
    useEffect(async () => {
        getInstance.get(`posts/?classroom=${props.classroomId}`,)
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
                setLoading(false)
            })
            .catch(err => console.warn(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <Grid
                container
                spacing={1}
                justify="space-between"
                alignItems="center"
                alignContent="center"
                className={classes.addComment}
            >
                <Grid item>
                    <Button variant="contained"
                        color={open ? "secondary" : "primary"}
                        // startIcon={open ? <CancelIcon /> : null}
                        aria-label="Add Comment"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <>cancel </> : <>Add Comment</>}
                    </Button>
                </Grid>
            </Grid>
            {open && <form onSubmit={handleSubmit} noValidate={false}>
                <Grid container
                    spacing={1}
                    alignContent="center"
                    alignItems="center"
                    className={classes.commentBox}
                >
                    <Grid item md>
                        <InputBase
                            id="outlined-textarea"
                            label="post title"
                            placeholder="Enter post Title"
                            // multiline
                            fullWidth
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            variant="filled"
                            required
                        />
                        <InputBase
                            id="outlined-textarea"
                            label="post content"
                            placeholder="Enter post content"
                            multiline
                            fullWidth
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            // variant="filled"
                            required
                        />
                    </Grid>
                    <Grid item md={2}>
                        <IconButton aria-label="add comment" type="submit" >
                            {/* <SendIcon /> */}
                        </IconButton>
                    </Grid>
                </Grid>


            </form>
            }
            <><Typography variant="body1" className={classes.title}>Recent Posts</Typography>

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
                                <Grid item md>
                                    <Typography variant="body1">

                                        {loading ? <Skeleton animation="wave" width="200" style={{ marginBottom: 6 }} /> : <> {post.title}</>}

                                    </Typography>
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
                                    {loading ?
                                        <>
                                            <Skeleton variant="circle" width={40} height={40} />
                                            {/* <Skeleton animation="wave" style={{ marginBottom: 6 }} /> */}
                                        </>
                                        :
                                        <>
                                            <Avatar alt="Remy Sharp" src={post.owner_avatar_url} />
                                            {/* <Typography variant="body1">{post.author}</Typography> */}
                                        </>
                                    }


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
        </>
    )
}

export default Posts


