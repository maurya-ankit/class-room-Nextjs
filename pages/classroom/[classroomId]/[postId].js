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
const Index = ({ classroomId, postId }) => {
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
    return { classroomId, postId }
}
export default Index
