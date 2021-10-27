/**
 * Trouver les multiples d'un nombre entier positif jusqu'à une limite donnée.
 * @param {number} int - Le nombre entier positif.
 * @param {number} length - La limite.
 * @returns {number[]} Les multiples.
 */
const tableauDeMultiples = (int, length) =>
  [...Array(length)].map((_, i) => -~i * int);

// const tableauDeMultiples = (int, length) => Array.from({ length }, (_, i) => -~i * int); est une autre possibilité intéréssante.

// Test
console.log(tableauDeMultiples(5, 10)); // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

/*
L'opérateur ~ fonctionne de la sorte:

~x = -(x + 1),

Example: ~0 = -(0 + 1) = -1

Donc -~x = -(-(x + 1)) = x + 1

Example: -~0 = -(-0 + 1) = 0 + 1 = 1
*/
