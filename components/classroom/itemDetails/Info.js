import { Divider, IconButton, makeStyles, Button } from '@material-ui/core';
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

    }
}))

const Info = (props) => {
    const classes = useStyle();
    const { post, comments } = props;
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
            { post &&
                <Grid container spacing={1}
                    justify="center"
                    // alignItems="center"
                    // alignContent="center"
                    className={classes.root}
                    direction="column"
                >
                    <Grid item >
                        <Typography variant="subtitle2" color="textSecondary">
                            Author : {post.author}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="caption" color="textSecondary">
                            Date: 12/01/2020 12:00 IST
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" color="textPrimary">
                            {post.title}
                        </Typography>
                    </Grid>
                    <Divider style={{ margin: 10 }} />
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">
                            {post.content}
                        </Typography>
                    </Grid>
                </Grid>

            }
            <Grid
                container
                spacing={1}
                justify="space-between"
                alignItems="center"
                alignContent="center"
                className={classes.addComment}
            >
                <Grid item>
                    <Button variant="contained" color="primary" startIcon={<ChatBubbleOutlineIcon />} aria-label="Add Comment">
                        Add Comment
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="default" startIcon={<ChatBubbleOutlineIcon />} aria-label="Report Error">
                        Report Error
                    </Button>
                </Grid>
            </Grid>

            { comments && <Timeline align="left" className={classes.timeline}>
                {comments.map((comment, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent style={{ flex: 0 }}>

                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <FastfoodIcon />
                            </TimelineDot>
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
                                    <Grid item >
                                        <Typography variant="subtitle1">
                                            {comment.author}
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography variant="caption" color="textSecondary">
                                            Date: {comment.created_at}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* <Divider /> */}

                                <Typography variant="body1" color="textSecondary">{comment.content}</Typography>

                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
            }

        </div>
    )
}

export default Info
