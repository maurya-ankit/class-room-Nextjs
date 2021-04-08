import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/layout/classroom/Layout'
import Grid from '@material-ui/core/Grid'
import Sidebar from '../../../components/classroom/Sidebar'
import { makeStyles, colors } from '@material-ui/core'
import Posts from '../../../components/classroom/detail/Posts'
import Info from '../../../components/classroom/itemDetails/Info'
import Submit from '../../../components/classroom/itemDetails/Submit'
import getInstance from '../../../backend/api'
import Cookies from 'cookies'
import { parseCookies } from "../../../helpers/"

const useStyle = makeStyles((theme) => ({

}))
<<<<<<< HEAD
const Index = ({ classroomId, postId }) => {
=======
const Index = ({ classroomId, postId, post, comments, profileObj }) => {
>>>>>>> 850802202f74ed9e8be03897c0053b2792581b99
    const classes = useStyle();
    return (
        <Layout profileObj={JSON.parse(profileObj)}>
            <div className={classes.shape}>


                <Grid
                    container
                    spacing={1}
                    // justify="center"
                    // alignItems="center"
                    alignContent="space-around"

                >
                    <Grid item md={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item md={6}>
                        <Info classroomId={classroomId} postId={postId} />
                    </Grid>
                    <Grid item md={3}>
                        <Submit />
                    </Grid>

                </Grid>

            </div>
        </Layout>
    )
}
Index.getInitialProps = async ({ query, req }) => {
    const { classroomId, postId } = query
<<<<<<< HEAD
    return { classroomId, postId }
=======
    const data = parseCookies(req)
    const authToken = data.authToken
    const profileObj = data.profileObj
    const res2 = await fetch(
        `${process.env.apiBaseUrl}/posts/${postId}?classroom=${classroomId}`,
        {
            headers: {
                'Authorization': `Token ${authToken}`
            }
        })

    const post = await res2.json()
    const res = await fetch(
        `${process.env.apiBaseUrl}/posts/comments/?classroom=${classroomId}&post=${postId}`,
        {
            headers:
            {
                'Authorization': `Token ${authToken}`
            }
        }
    )
    const comments = await res.json()



    return { post, comments, profileObj }
>>>>>>> 850802202f74ed9e8be03897c0053b2792581b99
}
export default Index
