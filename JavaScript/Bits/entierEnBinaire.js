/**
 * @description Conversion d'un nombre entier en binaire.
 * @param {number} int - Nombre à convertir.
 * @return {string} Le nombre converti en binaire.
 */
const entierEnBinaire = (int) => (int >>> 0).toString(2);

// Test
console.log(entierEnBinaire(5)); // 101
console.log(entierEnBinaire(-5)); // 11111111111111111111111111111011

/*
int >>> 0 permet de convertir l'argument en entier non signé.
Sans cet opérateur, -5 aurait donné -101.
*/
