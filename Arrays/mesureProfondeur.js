/**
 * @description Permet de mesurer la profondeur d'un tableau.
 * [] => 1, [[]] => 2, [[[]]] => 3, [[[[]]]] => 4, etc.
 * Méthode récursive.
 * @param {Array} arr - Le tableau à mesurer.
 * @returns {number} La profondeur du tableau.
 */
const mesureProfondeur = (arr) => (arr ? 1 + mesureProfondeur(arr[0]) : 0);

/**
 * @description Permet de mesurer la profondeur d'un tableau.
 * [] => 1, [[]] => 2, [[[]]] => 3, [[[[]]]] => 4, etc.
 * Seconde méthode.
 * @param {Array} arr - Le tableau à mesurer.
 * @returns {number} La profondeur du tableau.
 */
const mesureProfondeur2 = (arr) => (arr ? JSON.stringify(arr).length / 2 : 0);

// Test de rapidité pour les deux méthodes

// méthode récursive pour profondeur = 10: 3.5ms
console.time("mesureProfondeur");
console.log("Méthode récursive:", mesureProfondeur([[[[[[[[[[]]]]]]]]]])); // 10
console.timeEnd("mesureProfondeur");

// seconde méthode pour profondeur = 10: 0.08ms
console.time("mesureProfondeur2");
console.log("Seconde méthode:", mesureProfondeur2([[[[[[[[[[]]]]]]]]]])); // 10
console.timeEnd("mesureProfondeur2");
