/**
 * Fonction qui calcule la moyenne d'un tableau de nombres
 * @param {Array} arr - Tableau de nombres
 * @return {Number} Moyenne
 */
const moyenne = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

// Test
console.log(moyenne([1, 3, 3, 7])); // 3.5
