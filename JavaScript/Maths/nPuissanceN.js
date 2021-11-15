/**
 * @description Fonction pour verifier si un nombre est n-puissance de n
 * @param {number} n - Nombre a verifier
 * @param {number} int - Entier positif
 * @returns {boolean} True si le nombre est n-puissance de n, false sinon
 */
const nPuissanceN = (n, int) => int ** int === n;

// Test
console.log(nPuissanceN(3125, 5)); // true, 5^5 = 3125
