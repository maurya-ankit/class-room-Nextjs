import { makeStyles, Grid, Typography, Button } from "@material-ui/core"
import Image from "next/image";

const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.alternate.main,
        padding: 20,
        borderRadius: 20,
        margin: 20,
    },
}))

const Submit = () => {
    const classes = useStyle();
    return (
        <div><Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            // alignItems="center"
            alignContent="center"
            className={classes.root}

        >
            <Grid item>
                <Typography variant="subtitle1" color="textSecondary"> Assignment Submission</Typography>
            </Grid>

            <Grid item>
                <Typography variant="h6" color="textPrimary"> Assignment 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet?</Typography>
            </Grid>
            <Grid item>
                <Image src="/images/undraw_Publish_article_re_3x8h.svg" height={300} width={300} alt="undraw svg" />
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary" aria-label="assignment Upload">
                    Upload
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" fullWidth style={{ borderRadius: 20 }} aria-label="Assignment Turn-in">
                    Turn In
                </Button>
            </Grid>
        </Grid>

        </div>
    )
}

export default Submit
