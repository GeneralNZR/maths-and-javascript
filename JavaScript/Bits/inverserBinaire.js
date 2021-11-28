/**
 * @description Une fonction qui prend en paramètre un entier positif et qui retourne 
 * la représentation binaire de cet entier.
 * @param {number} int - Nombre entier à convertir en binaire, puis à inverser.
 * @return {number} Nombre binaire inversé
 */
const inverserBinaire = (int) => parseInt(int.toString(2).split("").reverse().join(""), 2);

// Test
console.log(inverserBinaire(8)); // 1000 => 0001, soit 1
