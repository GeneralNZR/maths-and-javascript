/**
 * Vérifie si un nombre est positif.
 * @param {number} int - Nombre a vérifier
 * @return {boolean} True si pair, false sinon
 */
const estPositif = int => int >> 31 === 0;

// Test
console.log(estPositif(1)); // true
console.log(estPositif(-1)); // false

/*
00000000000000000000000000000000 32 bits
10000000000000000000000000000000 équivaut à 2^31 soit 2_147_483_648
11111111111111111111111111111111 équivaut à 2^31-1 soit 2_147_483_647
*/