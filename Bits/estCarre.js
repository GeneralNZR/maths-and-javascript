/**
 * Division d'un nombre par deux.
 * @param {number} int - Nombre à diviser par deux.
 * @return {number} Nombre divisé par deux.
 */
const divisionParDeux = int => int >> 1;

// Test
console.log(divisionParDeux(10)); // 5

/*
00000000000000000000000000001010 représente 10, soit 2^3 + 0 + 2^1 + 0
00000000000000000000000000000101 représente 5, soit 2^1 + 0 + 2^0
*/