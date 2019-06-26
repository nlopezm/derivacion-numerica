import React, { PureComponent } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "90%"
  },
  button: {
    margin: theme.spacing.unit,
    width: "100%"
  }
});

class Form extends PureComponent {
  state = { formula: "x^2", a: 0, n: 4, h: 0.25, b: 1 };
  onChange = async ({ target: { id, value } }) => {
    await this.setState({
      [id]: id === "formula" || id === "h" || !value ? value : parseInt(value)
    });
    const { a, n, h, b } = this.state;
    if (id === "n" && n) {
      if (h) this.setState({ b: parseInt(a + n * parseFloat(h)) });
      else if (b) this.setState({ h: (a + b) / n });
    } else if (id === "h" && h) {
      if (b) this.setState({ n: (b - a) / parseFloat(h) });
      else if (n) this.setState({ b: parseInt(a + n * parseFloat(h)) });
    } else if (id === "b" && b) {
      if (h) this.setState({ n: (b - a) / parseFloat(h) });
      else if (n) this.setState({ h: (b - a) / n });
    } else if (id === "a" && a && n && h)
      this.setState({ b: parseInt(a + n * parseFloat(h)) });
  };

  render() {
    const { classes, onSubmit } = this.props;
    const { formula, a, n, h, b } = this.state;
    return (
      <Paper style={{ width: "100%" }} elevation={1}>
        <form
          className={classes.container}
          autoComplete="off"
          onSubmit={e => e.preventDefault() || onSubmit(this.state)}
        >
          <Grid container spacing={16}>
            <Grid item xs={4}>
              <TextField
                id="formula"
                label="f(x,t)"
                onChange={this.onChange}
                value={formula}
                margin="normal"
                required
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="a"
                label="a"
                value={a}
                type="number"
                onChange={this.onChange}
                margin="normal"
                required
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="n"
                label="n"
                type="number"
                onChange={this.onChange}
                margin="normal"
                required
                className={classes.textField}
                required
                value={n}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="h"
                label="h"
                onChange={this.onChange}
                margin="normal"
                required
                value={h}
                className={classes.textField}
                required={!b}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="b"
                label="b"
                onChange={this.onChange}
                margin="normal"
                value={b}
                required={!h}
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={8} />
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  OK
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Form);
