/**
 * La factorielle d'un entier n est le produit des nombres de 1 à n.
 * Méthode récursive.
 * @param {number} int
 * @returns {number} factorielle de int
 */
const rFactorielle = (int) => (int <= 1 ? 1 : int * rFactorielle(int - 1));

/**
 * La factorielle d'un entier n est le produit des nombres de 1 à n.
 * Méthode itérative.
 * @param {number} int
 * @returns {number} factorielle de int
 */
const iFactorielle = (int) => {
  let result = 1;
  for (let i = 2; i <= int; i++) {
    result *= i;
  }
  return result;
};

// Test de rapidité pour les deux méthodes

// méthode récursive pour n = 100:  3.5ms
console.time("rFactorielle");
console.log(rFactorielle(100));
console.timeEnd("rFactorielle");

// méthode itérative pour n = 100:  0.08ms
console.time("iFactorielle");
console.log(iFactorielle(100));
console.timeEnd("iFactorielle");
