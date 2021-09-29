/**
 * Vérifie si un nombre est pair.
 * @param {number} int - Nombre a vérifier
 * @return {boolean} True si pair, false sinon
 */
const estPair = int => (int & 1) === 0;

// Test
console.log(estPair(6)); // true
console.log(estPair(11)); // false

/*
00000000000000000000000000000000 32 bits
00000000000000000000000000000001 1 bit, représente 2^0 soit 1
les nombres pairs sont des nombres avec un bit à 0 à la fin
pour tout n qui est un entier positif, (n % 2) + 1 est un nombre impair.
*/