// https://mathjs.org/docs/expressions/syntax.html
import * as math from "mathjs";

export const getParser = formula => {
  const parser = math.parser();
  parser.eval(`f(x) = ${formula}`);
  return parser;
};

// https://wikimedia.org/api/rest_v1/media/math/render/svg/20dfcb52b5c2c868375ef8a4566586aa97bfdbc6
export const derivadaHaciaAdelante = (formula, a, n, h) => {
  const parser = getParser(formula);
  const b = a + n * h;
  // Arranco desde k=n-1 para no tener que calcular cada f k+1 dos veces
  let values = [{ x: b, fx: undefined }];
  // f k+1 = f n-1+1 = f n = f(b) para el valor más alto de k
  let fk1 = parser.eval(`f(${b})`);
  for (let x = b - h; x >= a; x -= h) {
    const fk = parser.eval(`f(${x})`);
    values.push({
      x,
      fx: (fk1 - fk) / h
    });
    fk1 = fk;
  }
  // Devuelvo el mismo array pero invertido, así queda ordenado de menor a mayor
  // Invertir un array es más performante que ir agregando
  // todos los elementos en la posición 0 (unshift())
  return values.reverse();
};

// https://wikimedia.org/api/rest_v1/media/math/render/svg/c2c1c2eabd78b4d1f342467ee46d57f08a8e958a
export const derivadaHaciaAtras = (formula, a, n, h) => {
  const parser = getParser(formula);
  const b = a + n * h;
  let values = [{ x: a, fx: undefined }];
  // f k con k=0 => f(a)
  let fk1 = parser.eval(`f(${a})`);
  for (let x = a + h; x <= b; x += h) {
    const fk = parser.eval(`f(${x})`);
    values.push({
      x,
      fx: (fk - fk1) / h
    });
    fk1 = fk;
  }
  return values;
};

// https://wikimedia.org/api/rest_v1/media/math/render/svg/788ad76669c08adc76e6edaa56c224285f15db47
export const derivadaCentrada = (formula, a, n, h) => {
  const parser = getParser(formula);
  const b = a + n * h;
  let values = [{ x: a, fx: undefined }];
  // f k con k=0 => f(a)
  let fk1 = parser.eval(`f(${a})`);
  for (let x = a + h; x < b; x += h) {
    const fk = parser.eval(`f(${x})`);
    values.push({
      x,
      fx: (parser.eval(`f(${x + h})`) - fk1) / 2 / h
    });
    fk1 = fk;
  }
  values.push({ x: b, fx: undefined });
  return values;
};

// https://wikimedia.org/api/rest_v1/media/math/render/svg/1bebe6b4e44805b324fc2afd26b78023930cbcb8
export const derivadaSegundaCentrada = (formula, a, n, h) => {
  const parser = getParser(formula);
  const b = a + n * h;
  let values = [{ x: a, fx: undefined }];
  // f k con k=0 => f(a)
  let fk1 = parser.eval(`f(${a})`);
  for (let x = a + h; x < b; x += h) {
    let fk = parser.eval(`f(${x})`);
    values.push({
      x,
      fx: (parser.eval(`f(${x + h})`) - 2 * fk + fk1) / h / h
    });
    fk1 = fk;
  }
  values.push({ x: b, fx: undefined });
  return values;
};

// https://wikimedia.org/api/rest_v1/media/math/render/svg/1bebe6b4e44805b324fc2afd26b78023930cbcb8
export const fx = (formula, a, n, h) => {
  const parser = getParser(formula);
  const b = a + n * h;
  let values = [];
  for (let x = a; x <= b; x += h) {
    values.push({
      x,
      fx: parser.eval(`f(${x})`)
    });
  }
  return values;
};

export const derivada = (formula, a, n, h) => {
  const fx = math.derivative(formula, "x");
  const parser = getParser(fx);
  const b = a + n * h;
  let values = [];
  for (let x = a; x <= b; x += h) {
    values.push({
      x,
      fx: parser.eval(`f(${x})`)
    });
  }
  return values;
};

export const derivadaSegunda = (formula, a, n, h) => {
  const fx1 = math.derivative(formula, "x");
  const fx2 = math.derivative(fx1, "x");
  const parser = getParser(fx2);
  const b = a + n * h;
  let values = [];
  for (let x = a; x <= b; x += h) {
    values.push({
      x,
      fx: parser.eval(`f(${x})`)
    });
  }
  return values;
};
