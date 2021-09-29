/**
 * Vérifier si un nombre est une puissance de deux
 * @param {number} int - Nombre à vérifier
 * @returns {boolean} - True si le nombre est un puissance de deux, false sinon
 */
const estPuissanceDeDeux = int => (int & (int - 1)) === 0;

// Test
console.log(estPuissanceDeDeux(8)); // true
console.log(estPuissanceDeDeux(7)); // false

/*
On prend un nombre entier n, on vérifie si n & (n - 1) est égal à 0.
Si c'est le cas, alors n est un nombre de puissance de deux.
00000000000000000000000000001000 = 8
00000000000000000000000000000111 = 7
8 & (8 - 1) = 0, donc 8 est un nombre de puissance de deux.
*/