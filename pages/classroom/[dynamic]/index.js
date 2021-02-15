import { useRouter } from 'next/router'
import 'react'
import Head from 'next/head'
import { Grid, Paper, Avatar, makeStyles } from '@material-ui/core'
import Sidebar from '../../../components/classroom/Sidebar'

import Schedule from '../../../components/classroom/detail/Schedule'
import Detail from '../../../components/classroom/Detail'
import Layout from '../../../components/layout/classroom/Layout'
const Post = () => {
    const router = useRouter()
    const { dynamic } = router.query

    return (
        <Layout>
            <Head>
                <title>classroom</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Grid
                container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                wrap="nowrap"

            >
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md>
                    <Detail />
                </Grid>
                <Grid item md={3}>
                    <Schedule />
                </Grid>
            </Grid>

        </Layout>
    )
}

export default Post