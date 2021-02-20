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
const useStyle = makeStyles((theme) => ({
    // shape: {
    // background: theme.palette.alternate.main,
    //     borderBottomRightRadius: '50%',
    //     borderBottom: `1px solid ${colors.grey[200]}`,
    // },
}))
const Index = ({ classroomId, postId, post, comments }) => {
    const classes = useStyle();
    return (
        <Layout>
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
                        <Info classroomId={classroomId} postId={postId} post={post} comments={comments} />
                    </Grid>
                    <Grid item md={3}>
                        <Submit />
                    </Grid>

                </Grid>

            </div>
        </Layout>
    )
}
Index.getInitialProps = async ({ query }) => {
    const { classroomId, postId } = query
    // async () => {
    //     getInstance.get(,)
    //         .then(response => {
    //             comments = response.data;
    //             console.log(response.data);
    //         })
    //         .catch(err => console.warn(err))
    // }
    const res2 = await fetch(`https://ankitm.herokuapp.com/posts/${postId}?classroom=${classroomId}`, { headers: { 'Authorization': 'Token 7f0198d42f1623bd7c8460dae32e4d5a858151a13473271f61d599e79bc8a1d0' } })
    const post = await res2.json()
    const res = await fetch(`https://ankitm.herokuapp.com/posts/comments/?classroom=${classroomId}&post=${postId}`, { headers: { 'Authorization': 'Token 7f0198d42f1623bd7c8460dae32e4d5a858151a13473271f61d599e79bc8a1d0' } })
    const comments = await res.json()



    return { classroomId, postId, post, comments }
}
export default Index
