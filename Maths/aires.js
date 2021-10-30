/**
 * Différentes fonctions de calcul de l'aire de différentes figures.
 * (sphère, cube, cylindre, cone, tore)
 * @author Noam Zeitoun
 * @version 1.0
 */

/**
 * Calcul de l'aire d'une sphère
 * @param {number} r - Rayon de la sphère
 * @return {number} Aire de la sphère
 */
const aireSphère = (r) => 4 * Math.PI * r ** 2;

/**
 * Calcul de l'aire d'un cube
 * @param {number} c - Côté du cube
 * @return {number} Aire du cube
 */
const aireCube = (c) => 6 * c ** 2;

/**
 * Calcul de l'aire d'un cylindre
 * @param {number} r - Rayon du cylindre
 * @param {number} h - Hauteur du cylindre
 * @return {number} Aire du cylindre
 */
const aireCylindre = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * r ** 2;

/**
 * Calcul de l'aire d'un cone
 * @param {number} r - Rayon du cone
 * @param {number} h - Hauteur du cone
 * @return {number} Aire du cone
 */
const aireCone = (r, h) => Math.PI * r * (r + Math.sqrt(r ** 2 + h ** 2));

/**
 * Calcul de l'aire d'un tore
 * @param {number} r - Rayon du tore
 * @param {number} R - Rayon du tube
 * @return {number} Aire du torus
 */
const aireTore = (r, R) => 4 * Math.PI ** 2 * r * R;

// Tests
console.table({
  "aireSphère(3)": aireSphère(3),
  "aireCube(3)": aireCube(3),
  "aireCylindre(3, 3)": aireCylindre(3, 3),
  "aireCone(3, 3)": aireCone(3, 3),
  "aireTore(3, 3)": aireTore(3, 3),
});
