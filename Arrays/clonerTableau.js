/**
 * Permet de cloner un tableau dans un tableau.
 * @param {Array} arr - Le tableau à cloner.
 * @returns {Array} Le tableau avec le clone.
 */
const clonerTableau = (arr) => [...arr, arr];

console.log(clonerTableau([0, 0, 0])); // [ 0, 0, 0, [ 0, 0, 0 ] ]
