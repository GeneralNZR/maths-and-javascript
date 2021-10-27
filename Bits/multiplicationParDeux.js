/**
 * Multiplication d'un nombre par deux.
 * @param {number} int - Nombre à multiplier par deux.
 * @return {number} Nombre multiplié par deux.
 */
const multiplicationParDeux = (int) => int << 1;

// Test
console.log(multiplicationParDeux(5)); // 10

/*
00000000000000000000000000000101 représente 5, soit 2^1 + 0 + 2^0
00000000000000000000000000001010 représente 10, soit 2^3 + 0 + 2^1 + 0
*/
