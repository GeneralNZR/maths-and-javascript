/**
 * @description Fonction qui permet d'isoler la partie décimale d'un nombre.
 * @param {number} number - Nombre à découper.
 * @returns {number} - Partie décimale du nombre.
 */
const partieDecimale = (number) => number.toString().split('.')[1];

// Test
console.log(partieDecimale(111.222)); // 222