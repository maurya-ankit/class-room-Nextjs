import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Button, Grid } from '@material-ui/core'
const Header = ({ profileObj }) => {
    return (
        <div>
            <AppBar position="relative" color="primary" elevation={0}>
                <Toolbar>
                    <Grid container
                        spacing={1}
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h6">
                                Classroom
                            </Typography>
                        </Grid>
                        <Grid item md>

                        </Grid>
                        <Grid item>
                            <IconButton color="secondary" >
                                <NotificationsActiveIcon />
                            </IconButton>
                            <IconButton color="secondary" >
                                <AssignmentIcon />
                            </IconButton>
                            <Typography variant="caption" color="initial" >
                                {profileObj.name}
                            </Typography>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
