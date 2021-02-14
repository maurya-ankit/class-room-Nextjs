import { useRouter } from 'next/router'
import 'react'
import Head from 'next/head'
import { Grid, Paper, Avatar, makeStyles } from '@material-ui/core'
import Sidebar from '../../components/classroom/Sidebar'
import TabGrid from '../../components/classroom/TabGrid'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Schedule from '../../components/classroom/detail/Schedule'
import Detail from '../../components/classroom/Detail'
const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Head>
                <title>classroom</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AppBar position="relative" color="inherit" elevation={0}>
                <Toolbar>
                    <Grid container
                        spacing={1}
                        justify="center"
                    >
                        <Grid item>
                            <Typography variant="h6">
                                Classroom
                            </Typography>
                        </Grid>
                        <Grid item md>

                        </Grid>
                        <Grid item>
                            <IconButton color="primary" >
                                <NotificationsActiveIcon fontSize="small" />
                            </IconButton>
                            <IconButton color="primary" >
                                <AssignmentIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            <Grid
                container
                spacing={4}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                wrap="nowrap"

            >
                <Grid item md={2}>
                    <Paper elevation={0}>
                        <Sidebar />
                    </Paper>
                </Grid>
                <Grid item md>
                    <Paper elevation={0}>
                        <Detail />
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper elevation={0}>
                        <Schedule />
                    </Paper>
                </Grid>
            </Grid>

        </>
    )
}

export default Post