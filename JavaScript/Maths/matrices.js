/**
 * Différentes fonctions pour manipuler des matrices.
 * @author Noam Zeitoun
 * @version 1.0
 */

/** *
 * @description Matrice identité.
 * @param {number} n - Dimension de la matrice.
 * @return {Array} La matrice identité.
 */
const matriceIdentite = (n) => {
    let matrice = [];
    for (let i = 0; i < n; i++) {
        matrice[i] = [];
        for (let j = 0; j < n; j++) {
            matrice[i][j] = (i == j) ? 1 : 0;
        }
    }
    return matrice;
};

/**
 * @description Vérifie la dimension d'une matrice.
 * @param {Array} matrice - La matrice à vérifier.
 * @param {Number} n - La dimension attendue.
 * @return {boolean} - True si la matrice est valide, false sinon.
 */
const dimensionMatrice = (matrice, n) => (matrice.length == n && matrice[0].length == n);

/* ---------------- *
 * Travail en cours *
 * ---------------- */

// Tests
console.table({
    'matriceIdentite(3)': matriceIdentite(3),
    "dimensionMatrice([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 3)": dimensionMatrice([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 3),
})