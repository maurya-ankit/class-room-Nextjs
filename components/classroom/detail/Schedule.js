import React from 'react'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import { Divider, makeStyles, Typography, Paper, Box } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
const useStyle = makeStyles((theme) => ({
    img: {
        borderRadius: "50%",
    },
    style: {
        marginTop: 10,
    },
    box: {
        backgroundColor: "#000"
    },
    root: {
        background: theme.palette.alternate.main,
        padding: 20,
        borderRadius: 20,
        margin: 20,
    },
}))
const Schedule = () => {
    const classes = useStyle();
    return (
        <div
            className={classes.root}
        >
            <Grid
                container
                spacing={2}
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"

            >
                <Grid item>
                    <Image src="/images/Profile-Pic.jpg" height={100} width={100} className={classes.img} alt="Teacher Profile" />

                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        Ankit Maurya
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                className={classes.style}

            >
                <Grid item>
                    <Typography variant="subtitle2">
                        Enrolled
                    </Typography>
                    <Typography variant="subtitle1">
                        138
                    </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item>
                    <Typography variant="subtitle2">
                        Active
                    </Typography>
                    <Typography variant="subtitle1">
                        45
                    </Typography>
                </Grid>
            </Grid>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </div>
    )
}

export default Schedule
