import React, { PureComponent } from "react";
import Form from "./Form";
import Tabla from "./Tabla";
import Grid from "@material-ui/core/Grid";

import {
  derivadaHaciaAdelante,
  derivadaHaciaAtras,
  derivadaCentrada,
  derivadaSegundaCentrada,
  fx,
  derivada,
  derivadaSegunda
} from "./utils";

const parseNumbers = ({ x0, n, h, ...rest }) => ({
  x0: parseInt(x0),
  n: parseInt(n),
  h: parseFloat(h),
  ...rest
});

class App extends PureComponent {
  state = {};

  onSubmit = values => {
    const { formula, a, n, h } = parseNumbers(values);
    this.setState({
      fx: fx(formula, a, n, h),
      derivada: derivada(formula, a, n, h),
      haciaAdelante: derivadaHaciaAdelante(formula, a, n, h),
      haciaAtras: derivadaHaciaAtras(formula, a, n, h),
      centrada: derivadaCentrada(formula, a, n, h),
      derivadaSegunda: derivadaSegunda(formula, a, n, h),
      segundaCentrada: derivadaSegundaCentrada(formula, a, n, h)
    });
  };
  render() {
    return (
      <Grid className="App" container spacing={24} style={{ margin: 16 }}>
        <Grid item xs={12}>
          <Form onChange={this.onChange} onSubmit={this.onSubmit} />
        </Grid>
        {this.state.fx && (
          <Grid item xs={12}>
            <Tabla data={buildData(this.state)} />
          </Grid>
        )}
      </Grid>
    );
  }
}

const buildData = ({
  haciaAdelante,
  haciaAtras,
  centrada,
  segundaCentrada,
  fx,
  derivada,
  derivadaSegunda
}) => {
  let values = [];
  for (let i = 0; i < haciaAdelante.length; i++) {
    values.push({
      x: haciaAtras[i].x,
      fx: fx[i].fx,
      derivada: derivada[i].fx,
      forward: haciaAdelante[i].fx,
      backward: haciaAtras[i].fx,
      centrada: centrada[i].fx,
      derivadaSegunda: derivadaSegunda[i].fx,
      segundaCentrada: segundaCentrada[i].fx
    });
  }
  return values;
};

export default App;
