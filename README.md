## Algoritmos

- Los algoritmos se encuentran en el archivo [src/utils.js](https://github.com/nlopezm/derivacion-numerica/blob/master/src/utils.js "src/utils.js").
- Los algoritmos disponibles son: f(x) exacta, f'(x) exacta, f' hacia adelante, f' hacia atrás, f' centrada, f''(x) exacta y f'' centrada.
  Todos ellos reciben como parámetro una fórmula `f(x)` y tres de los parámetros `a, n, h y b` (El otro se calcula automáticamente). Siendo n la cantidad de puntos y h la distancia entre cada punto de derivación.
- Se graficará una tabla con los valores encontrados. Aquellos que dan exactos serán de color verde, mientras que en rojo estarán los valores que no den el resultado exacto.
- Para evaluar las fórmulas, utilicé la librería [mathjs](https://mathjs.org/ "mathjs").

## Demo

Puede probarlo online desde cualquier dispositivo haciendo click en [este enlace](http://derivacion-numerica.s3-website-us-east-1.amazonaws.com "este enlace").

## Deploy

```bash
yarn client deploy
```

## Cómo ejecutar

- Instalar Node y npm
- En el directorio del proyecto, correr `npm start`
- Abrir [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.
