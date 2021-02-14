import { Button, Typography, Grid, InputBase } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, <Button variant="contained" color="secondary">open</Button>),
    createData('Ice cream sandwich', 237, 9.0, 37, <Button variant="contained" color="secondary">open</Button>),
    createData('Eclair', 262, 16.0, 24, <Button variant="contained" color="secondary">open</Button>),
    createData('Cupcake', 305, 3.7, 67, <Button variant="contained" color="secondary">open</Button>),
    createData('Gingerbread', 356, 16.0, 49, <Button variant="contained" color="secondary">open</Button>),
];
const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="body1">Posts</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Post Title</TableCell>
                            <TableCell align="right">Aurthor</TableCell>
                            <TableCell align="right">Posted On</TableCell>
                            <TableCell align="right">Number of Views</TableCell>
                            <TableCell align="right"> Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid
                container
                spacing={1}
                justify="center"
                alignItems="center"
                alignContent="center"

            >
                <Grid item md>

                </Grid>
                <Grid item>
                    <Button variant="text" color="default">
                        view more ...
</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Posts
