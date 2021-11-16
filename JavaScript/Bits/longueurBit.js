/**
 * @description Renvoie le nombre de bits utilisés dans la représentation binaire d'un nombre entier.
 * @param {number} int - Le nombre entier dont on veut connaître la longueur de sa représentation binaire.
 * @return {number} Nombre de bits utilisés.
 */
const longueurBit = (int) => {
  let compteur = 0;
  do compteur++;
  while (1 << compteur <= int);
  return compteur;
};

// Test avec 1, 8 et 512
console.log("Nombre de bits pour 1: ", longueurBit(1)); // 1
console.log("Nombre de bits pour 8: ", longueurBit(8)); // 4
console.log("Nombre de bits pour 512: ", longueurBit(512)); // 10
