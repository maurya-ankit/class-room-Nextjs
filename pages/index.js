import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from 'next/image'
import { Grid, makeStyles, Paper } from '@material-ui/core';
import TabGrid from '../components/profile/TabGrid'
import Personal from '../components/profile/Personal';
const useStyle = makeStyles({
  grid: {
    marginTop: 20,
  }

})


export default function Index() {
  const classes = useStyle();
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Image
          src="/images/profile-background.jpg"
          alt="Picture of the author"
          width={1920}
          height={350}
        />
        <Grid container
          spacing={3}
          alignContent="center"
          justify="space-around"
          className={classes.grid}
        >
          <Grid item md={4}>
            <Paper elevation={0} style={{ textAlign: 'center' }}>
              <Personal />
            </Paper>
          </Grid>
          <Grid item md={8}>
            <Paper elevation={0}>
              <TabGrid />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}