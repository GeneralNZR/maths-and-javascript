/**
 * @description Fonction qui permet de passer de degrés en radians.
 * @param {number} deg - Degrés
 * @returns {number} Radians
 */
const degEnRad = (deg) => (deg * Math.PI) / 180;

/**
 * @description Fonction qui permet de passer de radians en degrés.
 * @param {number} rad - Radians
 * @returns {number} Degrés
 */
const radEnDeg = (rad) => (rad * 180) / Math.PI;

// Tests
console.table({
  "degEnRad(90)": degEnRad(90),
  "radEnDeg(π / 4)": radEnDeg(Math.PI / 4),
});
