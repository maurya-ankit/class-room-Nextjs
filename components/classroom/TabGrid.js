import { Toolbar, Grid, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Banner from './TabGrid/Banner';
import Items from './TabGrid/Items';

const useStyle = makeStyles({
    btn: {
        marginInline: 10,
    },
})

const TabGrid = () => {
    const classes = useStyle();
    return (
        <>
            <Toolbar>
                <Grid
                    container
                    spacing={1}
                    justify="center"
                    alignItems="center"
                    alignContent="center"

                >
                    <Grid item>
                        <Button className={classes.btn}
                            color="default"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                        </Button>
                    </Grid>
                    <Grid item md>

                    </Grid>
                    <Grid item>
                        <Button
                            className={classes.btn}
                            color="default"
                        >
                            Yesterday
                        </Button>
                        <Button
                            className={classes.btn}
                            color="primary"
                            variant="contained"
                        >
                            Today
                        </Button>
                        <Button
                            className={classes.btn}
                            color="default"
                        >
                            Tomorrow
                        </Button>
                        <Button
                            className={classes.btn}
                            color="default"
                        >
                            All
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
            <Banner />
            <Items />


        </>
    )
}

export default TabGrid
