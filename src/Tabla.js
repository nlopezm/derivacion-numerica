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
  },
  exact: {
    color: "green"
  },
  wrong: {
    color: "red"
  }
}));

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
                <TableCell align="right" className={classes.exact}>
                  {fx}
                </TableCell>
                <TableCell align="right" className={classes.exact}>
                  {derivada}
                </TableCell>
                <TableCell
                  align="right"
                  className={
                    derivada === forward ? classes.exact : classes.wrong
                  }
                >
                  {forward || "X"}
                </TableCell>
                <TableCell
                  className={
                    derivada === backward ? classes.exact : classes.wrong
                  }
                  align="right"
                >
                  {backward || "X"}
                </TableCell>
                <TableCell
                  className={
                    derivada === centrada ? classes.exact : classes.wrong
                  }
                  align="right"
                >
                  {centrada || "X"}
                </TableCell>
                <TableCell className={classes.exact} align="right">
                  {derivadaSegunda}
                </TableCell>
                <TableCell
                  className={
                    derivadaSegunda === segundaCentrada
                      ? classes.exact
                      : classes.wrong
                  }
                  align="right"
                >
                  {segundaCentrada || "X"}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};
