/**
 * Fonction pour verifier si un nombre est n-puissance de n
 * @param {number} int - Nombre a verifier
 * @param {number} n - Entier positif n
 * @returns {boolean} True si le nombre est n-puissance de n, false sinon
 */
const nPuissanceN = (int, n) => n ** n === int;

// Test
console.log(nPuissanceN(3125, 5)); // true, 5^5 = 3125
