/**
 * Différentes fonctions pour manipuler des matrices.
 * @author Noam Zeitoun
 * @version 1.0
 */

/**
 * Vérifie la dimension d'une matrice.
 * @param {Array} matrice - La matrice à vérifier.
 * @param {Number} n - La dimension attendue.
 * @return {boolean} - True si la matrice est valide, false sinon.
 */
const dimensionMatrice = (matrice, n) => (matrice.length == n && matrice[0].length == n);
