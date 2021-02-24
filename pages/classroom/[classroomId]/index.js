import { useRouter } from 'next/router'
import 'react'
import Head from 'next/head'
import { Grid, Paper, Avatar, makeStyles } from '@material-ui/core'
import Sidebar from '../../../components/classroom/Sidebar'

import Schedule from '../../../components/classroom/detail/Schedule'
import Detail from '../../../components/classroom/Detail'
import Layout from '../../../components/layout/classroom/Layout'
import Cookies from 'cookies'
import { parseCookies } from "../../../helpers/"
const Post = ({ classroom, posts, profileObj }) => {


    return (
        <Layout profileObj={JSON.parse(profileObj)}>
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
                    <Detail classroom={classroom} posts={posts} />
                </Grid>
                <Grid item md={3}>
                    <Schedule />
                </Grid>
            </Grid>

        </Layout>
    )
}
Post.getInitialProps = async ({ query, req }) => {
    const { classroomId } = query
    const data = parseCookies(req)
    const authToken = data.authToken
    const profileObj = data.profileObj
    const res1 = await fetch(
        `${process.env.apiBaseUrl}/classroom/${classroomId}`,
        {
            headers: {
                'Authorization': `Token ${authToken}`
            }
        })

    const classroom = await res1.json()
    const res2 = await fetch(
        `${process.env.apiBaseUrl}/posts/?classroom=${classroomId}`,
        {
            headers:
            {
                'Authorization': `Token ${authToken}`
            }
        }
    )
    const posts = await res2.json()

    return { classroom, posts, profileObj }
}
export default Post