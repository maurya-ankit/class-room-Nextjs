import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'
import { Toolbar, Button, Paper, IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';

const useStyles = makeStyles((theme) => ({
    root: {
        // margin: 10,
        padding: 10,
        minWidth: 200,
        background: theme.palette.alternate.main,
        borderRadius: 10,
        height: "100vh",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }
}));
const Sidebar = () => {
    const classes = useStyles();
    const items = ["Dummie1", "Dummie2", "Dummie3", "Dummie4", "Dummie5"]
    return (
        <div className={classes.root}>
            <Toolbar>
                <Typography variant="button"  > Explore </Typography>
            </Toolbar>
            <List component="nav" aria-label="sidebar navigation Menu">
                {items.map((item) =>
                    <ListItem key={item}>
                        <Button startIcon={<InboxIcon />}>{item}</Button>
                    </ListItem>
                )}


            </List>
        </div >
    )
}

export default Sidebar
