import { makeStyles, Typography, Paper } from '@material-ui/core'
import React from 'react'
import Cards from './detail/Cards';
import Posts from './detail/Posts';
const useStyle = makeStyles({

})
const Detail = () => {
    const classes = useStyle();
    return (
        <Paper style={{ padding: 20, }}>
            <Typography variant="h6">Hey There, Ankit Maurya!</Typography>
            <Typography variant="subtitle2">Welcome Back, Keep going</Typography>
            <Cards />
            <Posts />
        </Paper>
    )
}

export default Detail
