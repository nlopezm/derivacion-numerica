import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default ({ data }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>x</TableCell>
            <TableCell>f(x)</TableCell>
            <TableCell>f'(x) exacta</TableCell>
            <TableCell align="right">f' adelante</TableCell>
            <TableCell align="right">f' atrás</TableCell>
            <TableCell align="right">f' centrada</TableCell>
            <TableCell>f '' (x) exacta</TableCell>
            <TableCell align="right">f '' centrada</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            ({
              x,
              derivada,
              forward,
              backward,
              centrada,
              derivadaSegunda,
              segundaCentrada,
              fx
            }) => (
              <TableRow key={x}>
                <TableCell component="th" scope="row">
                  {x}
                </TableCell>
                <TableCell align="right">{fx}</TableCell>
                <TableCell align="right">{derivada}</TableCell>
                <TableCell align="right">{forward || "X"}</TableCell>
                <TableCell align="right">{backward || "X"}</TableCell>
                <TableCell align="right">{centrada || "X"}</TableCell>
                <TableCell align="right">{derivadaSegunda}</TableCell>
                <TableCell align="right">{segundaCentrada || "X"}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};
