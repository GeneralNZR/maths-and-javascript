/**
 * Verifie si un nombre peut être exprimé en somme de deux ou plusieurs nombres entiers positifs consecutifs.
 * @param {number} int - Le nombre à tester.
 * @returns {boolean} - True si le nombre peut être exprimé en somme de deux ou plusieurs nombres entiers positifs consecutifs, false sinon.
 */
const sommeConsecutive = (int) => !!(int & (int - 1));

// Test
console.log(sommeConsecutive(10)); // true, car 10 = 1 + 9
console.log(sommeConsecutive(64)); // false

/*
L'opérateur !! permet de transformer un objet en booléen.
*/
