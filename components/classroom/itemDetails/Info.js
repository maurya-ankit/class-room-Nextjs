import { Divider, IconButton, makeStyles, Button, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useState, useEffect } from 'react'
import getInstance from '../../../backend/api'
import Skeleton from '@material-ui/lab/Skeleton';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import CancelIcon from '@material-ui/icons/Cancel';
import InputBase from '@material-ui/core/InputBase';
const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.alternate.dark,
        padding: 20,
        borderRadius: 20
    },
    timeline: {
        background: theme.palette.alternate.main,
        borderRadius: 20,
    },
    timelineItem: {
        background: theme.palette.alternate.dark,
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 20,
        padding: 20,
    },
    addComment: {
        padding: 10
    },
    commentBox: {
        background: theme.palette.alternate.main,
        padding: 5,
        borderRadius: 20
    }
}))

const Info = (props) => {
    const classes = useStyle();
<<<<<<< HEAD
    const { classroomId, postId } = props;
    const [post, setPost] = useState({});
    const [postLoading, setPostLoading] = useState(true);
    const [comments, setComments] = useState([{}]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [update, setUpdate] = useState(false);
    useEffect(async () => {
        getInstance.get(`posts/${postId}?classroom=${classroomId}`,)
            .then(response => {
                setPost(response.data);
                setPostLoading(false);
                console.log(response.data);
            })
            .catch(err => console.warn(err))
    }, [])

    useEffect(async () => {
        getInstance.get(`posts/comments/?classroom=${classroomId}&post=${postId}`,)
            .then(response => {
                setComments(response.data);
                setCommentsLoading(false);
                console.log(response.data);
            })
            .catch(err => console.warn(err))
    }, [update])

    const handleSubmit = (e) => {
        e.preventDefault();
        getInstance.post(`posts/comments/?classroom=${classroomId}&post=${postId}`, { content: newComment })
            .then(response => {
                console.log(response);
                setOpen(false);
                setUpdate(true)
                setNewComment("")
                setUpdate(st => !st);
            })
            .catch(err => console.log(err))
    }
=======
    const { post, comments } = props;
>>>>>>> 850802202f74ed9e8be03897c0053b2792581b99
    return (
        <div >

            <Grid container spacing={1}
                justify="center"
                alignItems="center"
                alignContent="center"

            >
                <Grid item md={5}>
                    <Typography variant="h5" color="initial">
                        Classroom Name
                    </Typography>
                </Grid>
                <Grid item md>

                </Grid>
                <Grid item md={2}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={1}
                justify="center"
                // alignItems="center"
                // alignContent="center"
                className={classes.root}
                direction="column"
            >
                <Grid item >
                    <Typography variant="subtitle2" color="textSecondary">

                        {postLoading ? <Skeleton animation="wave" height={10} width="30%" style={{ marginBottom: 6 }} /> : <> Author : {post.author}</>}

                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption" color="textSecondary">
                        {postLoading ? <Skeleton animation="wave" height={10} width="40%" style={{ marginBottom: 6 }} /> : <>{"Date: 12/01/2020 12:00 IST"}</>}

                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" color="textPrimary">
                        {postLoading ? <Skeleton animation="wave" style={{ marginBottom: 6 }} /> : <> {post.title}</>}
                    </Typography>
                </Grid>
                <Divider style={{ margin: 10 }} />
                <Grid item>
                    <Typography variant="body2" color="textSecondary">

                        {postLoading ? <>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />

                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="60%" style={{ marginBottom: 6 }} />

                        </> : <> {post.content}</>}

                    </Typography>
                </Grid>
            </Grid>
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
                        startIcon={open ? <CancelIcon /> : <ChatBubbleOutlineIcon />}
                        aria-label="Add Comment"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <>cancel </> : <>Add Comment</>}
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="default" startIcon={<ChatBubbleOutlineIcon />} aria-label="Report Error">
                        Report Error
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
                            label="Add comment"
                            placeholder=""
                            multiline
                            fullWidth
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            variant="filled"
                        />
                    </Grid>
                    <Grid item md={2}>
                        <IconButton aria-label="add comment" type="submit" >
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>


            </form>
            }
            <Timeline align="left" className={classes.timeline}>
                {comments.map((comment, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent style={{ flex: 0 }}>

                        </TimelineOppositeContent>
                        <TimelineSeparator style={{ marginTop: 10 }}>
                            {/* <TimelineDot> */}
                            {commentsLoading ? <Skeleton variant="circle" width={40} height={40} /> : <Avatar alt="Remy Sharp" src={comment.owner_avatar_url} />}


                            {/* </TimelineDot> */}
                            {index < comments.length - 1 ? <TimelineConnector /> : null}
                        </TimelineSeparator>
                        <TimelineContent className={classes.timelineItem}>
                            <div >
                                <Grid
                                    container
                                    spacing={1}
                                    justify="space-between"
                                    alignItems="center"
                                // alignContent="center"

                                >
                                    <Grid item md={3}>
                                        <Typography variant="subtitle1">
                                            {commentsLoading ? <Skeleton animation="wave" style={{ marginBottom: 6 }} /> : <> {comment.author}</>}


                                        </Typography>
                                    </Grid>
                                    <Grid item md>
                                        <Typography variant="caption" color="textSecondary">
<<<<<<< HEAD
                                            {commentsLoading ? <Skeleton animation="wave" style={{ marginBottom: 6 }} /> : <> {new Date(`${comment.created_at}`).toLocaleString()}</>}


=======
                                            Date: {comment.created_at}
>>>>>>> 850802202f74ed9e8be03897c0053b2792581b99
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* <Divider /> */}

                                <Typography variant="body1" color="textSecondary">

                                    {commentsLoading ? <Skeleton animation="wave" style={{ marginBottom: 6 }} /> : <> {comment.content}</>}

                                </Typography>

                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

        </div>
    )
}

export default Info
