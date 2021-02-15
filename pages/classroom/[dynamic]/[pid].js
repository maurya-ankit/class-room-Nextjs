import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/layout/classroom/Layout'
import Grid from '@material-ui/core/Grid'
import Sidebar from '../../../components/classroom/Sidebar'
import { makeStyles, colors } from '@material-ui/core'
import Posts from '../../../components/classroom/detail/Posts'
import Info from '../../../components/classroom/itemDetails/Info'
import Submit from '../../../components/classroom/itemDetails/Submit'
const useStyle = makeStyles((theme) => ({
    // shape: {
    // background: theme.palette.alternate.main,
    //     borderBottomRightRadius: '50%',
    //     borderBottom: `1px solid ${colors.grey[200]}`,
    // },
}))
const Index = () => {
    const classes = useStyle();
    const router = useRouter();
    const { dynamic, pid } = router.query
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
                        <Info />
                    </Grid>
                    <Grid item md={3}>
                        <Submit />
                    </Grid>

                </Grid>

            </div>
        </Layout>
    )
}

export default Index
