/**
 * @description Calcule l'ensemble de mandelbrot pour un ensemble donné de paramètres
 * @param {number} xMin - Abscisse min
 * @param {number} xMax - Abscisse max
 * @param {number} yMin - Ordonnée min
 * @param {number} yMax - Ordonnée max
 * @param {number} width - Largeur de l'image
 * @param {number} height - Hauteur de l'image
 * @param {number} maxiter - Nombre d'itérations max
 * @returns {array} Ensemble de mandelbrot
 */
const mandelbrot = (xMin, xMax, yMin, yMax, width, height, maxiter) => {
  const xStep = (xMax - xMin) / width;
  const yStep = (yMax - yMin) / height;
  const mandelbrotSet = [];

  for (let y = 0; y < height; y++) {
    const y0 = yMin + y * yStep;
    const row = [];
    for (let x = 0; x < width; x++) {
      const x0 = xMin + x * xStep;
      let x1 = 0;
      let y1 = 0;
      let iter = 0;
      while (x1 * x1 + y1 * y1 < 4 && iter < maxiter) {
        const xtemp = x1 * x1 - y1 * y1 + x0;
        y1 = 2 * x1 * y1 + y0;
        x1 = xtemp;
        iter++;
      }
      row.push(iter);
    }
    mandelbrotSet.push(row);
  }

  return mandelbrotSet;
}

/**
 * @description Retourne une string représentant l'ensemble de mandelbrot
 * @param {function} mandelbrotSet - Ensemble de mandelbrot
 * @returns {string} String représentant l'ensemble de mandelbrot
 */
const printMandelbrotSet = (mandelbrotSet) => {
    let str = '';
    for (let y = 0; y < mandelbrotSet.length; y++) {
        for (let x = 0; x < mandelbrotSet[y].length; x++) {
            str += mandelbrotSet[y][x] + ' ';
        }
        str += '\n';
    }
    return str;
}

// Test
console.log(printMandelbrotSet(mandelbrot(-2, 0, -1, 1, 30, 30, 20)));

/* --------------------------------------------------------------------------------------
Result of printMandelbrotSet(mandelbrot(-2, 0, -1, 1, 30, 30, 20)):

1 1 1 1 1 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 5 5 7 18 13 
1 1 1 1 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 5 5 6 8 12 11 
1 1 1 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 5 5 6 9 12 20 16 
1 1 1 2 2 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 5 6 6 7 11 20 20 20 
1 1 1 2 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 5 6 6 7 7 8 12 20 20 20 
1 1 2 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 5 5 6 20 20 9 12 12 15 20 20 20 
1 1 2 3 3 3 3 3 3 3 3 3 3 4 4 4 5 5 5 6 7 12 20 20 20 20 20 20 20 20 
1 1 3 3 3 3 3 3 3 3 3 4 4 5 5 5 5 5 6 6 8 11 20 20 20 20 20 20 20 20 
1 2 3 3 3 3 3 3 3 4 4 5 5 5 5 5 5 6 6 8 20 17 20 20 20 20 20 20 20 20 
1 2 3 3 3 3 3 4 4 5 6 11 7 7 7 7 7 7 7 9 15 20 20 20 20 20 20 20 20 20 
1 3 3 3 4 4 4 4 5 5 6 10 12 10 10 11 9 8 9 11 20 20 20 20 20 20 20 20 20 20 
1 3 4 4 4 4 4 5 5 5 7 9 13 20 20 20 20 20 11 15 20 20 20 20 20 20 20 20 20 20 
1 3 4 4 4 4 5 5 5 6 7 11 18 20 20 20 20 20 15 20 20 20 20 20 20 20 20 20 20 20 
1 4 4 4 4 5 6 6 7 13 9 14 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
1 5 5 5 7 6 6 7 9 12 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
1 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
1 5 5 5 7 6 6 7 9 12 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
1 4 4 4 4 5 6 6 7 13 9 14 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
1 3 4 4 4 4 5 5 5 6 7 11 18 20 20 20 20 20 15 20 20 20 20 20 20 20 20 20 20 20 
1 3 4 4 4 4 4 5 5 5 7 9 13 20 20 20 20 20 11 15 20 20 20 20 20 20 20 20 20 20 
1 3 3 3 4 4 4 4 5 5 6 10 12 10 10 11 9 8 9 11 20 20 20 20 20 20 20 20 20 20 
1 2 3 3 3 3 3 4 4 5 6 11 7 7 7 7 7 7 7 9 15 20 20 20 20 20 20 20 20 20 
1 2 3 3 3 3 3 3 3 4 4 5 5 5 5 5 5 6 6 8 20 17 20 20 20 20 20 20 20 20 
1 1 3 3 3 3 3 3 3 3 3 4 4 5 5 5 5 5 6 6 8 11 20 20 20 20 20 20 20 20 
1 1 2 3 3 3 3 3 3 3 3 3 3 4 4 4 5 5 5 6 7 12 20 20 20 20 20 20 20 20 
1 1 2 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 5 5 6 20 20 9 12 12 15 20 20 20 
1 1 1 2 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 5 6 6 7 7 8 12 20 20 20 
1 1 1 2 2 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 5 6 6 7 11 20 20 20 
1 1 1 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 5 5 6 9 12 20 16 
1 1 1 1 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 5 5 6 8 12 11

length: 30
-------------------------------------------------------------------------------------- */