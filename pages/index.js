import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from 'next/image'
import { Grid, makeStyles, Paper, colors } from '@material-ui/core';
import TabGrid from '../components/profile/TabGrid'
import Personal from '../components/profile/Personal';
const useStyle = makeStyles((theme) => ({
  grid: {
    marginTop: 20,
  },
  root: {
    background: theme.palette.alternate.main,
    padding: 20,
    borderRadius: 20,
    margin: 20,
  },
  img: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  parant: {
    background: theme.palette.alternate.primary,
  }
}))


export default function Index() {
  const classes = useStyle();
  return (
    < div className={classes.parant}>
      <Image
        src="/images/profile-background.jpg"
        alt="Picture of the author"
        width={1920}
        height={350}
        className={classes.img}
      />
      <Grid container
        spacing={1}
        alignContent="center"
        justify="space-around"
        className={classes.grid}
      >
        <Grid item md={3} className={classes.root} style={{ textAlign: 'center' }}>
          <Personal />
        </Grid>
        <Grid item md={8} className={classes.root}>
          <TabGrid />
        </Grid>
      </Grid>
    </div>
  );
}