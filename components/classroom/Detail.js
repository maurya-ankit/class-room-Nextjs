import { makeStyles, Typography, Paper } from '@material-ui/core'
import React from 'react'
import Cards from './detail/Cards';
import Posts from './detail/Posts';
const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.alternate.main,
        padding: 20,
        borderRadius: 20
    },
    title: {
        marginLeft: 20,
    },
    subtitle: {
        marginLeft: 20,
        // marginBottom: 10,
    },
}))
const Detail = (props) => {
    const classes = useStyle();
    const { classroom, posts } = props;
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>Hey There, Ankit Maurya!</Typography>
            <Typography variant="subtitle2" className={classes.subtitle}>Welcome Back, Keep going</Typography>
            <Cards classroom={classroom} />
            <Posts posts={posts} classroom={classroom} />
        </div>
    )
}

export default Detail
