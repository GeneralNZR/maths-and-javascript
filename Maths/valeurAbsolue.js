/**
 * @description Trouver la valeur absolue d'un nombre
 * @param {number} n - Nombre à trouver la valeur absolue
 * @returns {number} Valeur absolue du nombre
 */
const valeurAbsolue = (n) => (n < 0) ? -n : n;

// Test
console.log(valeurAbsolue(-1)); // 1
console.log(valeurAbsolue(-0.5)); // 0.5
