import React, { useState, useEffect } from 'react'
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
import Layout from '../../components/layout/classroom/Layout'
import baseInstance from '../../backend/api'
const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.alternate.main,
        padding: 20,
        borderRadius: 20,
        margin: 20,
    },
}))
const Index = () => {
    const classes = useStyle();

    const [data, setData] = useState([]);
    useEffect(async () => {
        baseInstance.get('classroom/',)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Layout>
            <Head>
                <title>classroom</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Grid
                container
                spacing={4}
                justify="flex-start"
                alignItems="flex-start"

            >
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={8} className={classes.root}>
                    <TabGrid data={data} />
                </Grid>
            </Grid>
        </Layout>
    )
}
export default Index
