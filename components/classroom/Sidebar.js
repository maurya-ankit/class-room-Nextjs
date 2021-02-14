import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography'
import { Toolbar, Button, Paper, IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
        padding: 10,
        minWidth: 200,
    }
}));
const Sidebar = () => {
    const classes = useStyles();
    const items = ["Overview", "schedule", "insight", "Legal", "Inbox"]
    return (
        <Paper elevation={0} className={classes.root}>
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
        </Paper >
    )
}

export default Sidebar
