/**
 * Inverser la conversion binaire d'un nombre entier
 * @param {number} int - Nombre entier à convertir en binaire, puis à inverser.
 * @return {number} Nombre binaire inversé
 */
const inverserBinaire = int => parseInt(int.toString(2).split('').reverse().join(''), 2);

// Test
console.log(inverserBinaire(8)); // 1000 => 0001, soit 1