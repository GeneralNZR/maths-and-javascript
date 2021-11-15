/**
 * Différentes fonctions de calcul de distances utiles.
 * @author Noam Zeitoun
 * @version 1.0
 */

/**
 * @description Fonction de calcul d'une distance Euclidienne entre 2 points.
 * @param {number} x1 - Abscisse du premier point.
 * @param {number} y1 - Ordonnée du premier point.
 * @param {number} x2 - Abscisse du deuxième point.
 * @param {number} y2 - Ordonnée du deuxième point.
 * @returns {number} Distance Euclidienne entre les 2 points.
 */
const distanceEuclidienne = (x1, y1, x2, y2) => {
  const width = x2 - x1;
  const height = y2 - y1;
  return Math.sqrt(width * width + height * height);
};

/**
 * @description Fonction de calcul d'une distance de Manhattan entre 2 points.
 * @param {number} x1 - Abscisse du premier point.
 * @param {number} y1 - Ordonnée du premier point.
 * @param {number} x2 - Abscisse du deuxième point.
 * @param {number} y2 - Ordonnée du deuxième point.
 * @returns {number} Distance de Manhattan entre les 2 points.
 */
const distanceManhattan = (x1, y1, x2, y2) => {
  const width = x2 - x1;
  const height = y2 - y1;
  return Math.abs(width) + Math.abs(height);
};

/**
 * @description Fonction de calcul d'une distance de Minkowski entre 2 points.
 * @param {number} x1 - Abscisse du premier point.
 * @param {number} y1 - Ordonnée du premier point.
 * @param {number} x2 - Abscisse du deuxième point.
 * @param {number} y2 - Ordonnée du deuxième point.
 * @param {number} p - Paramètre de la fonction de distance.
 * @returns {number} Distance de Minkowski entre les 2 points.
 */
const distanceMinkowski = (x1, y1, x2, y2, p) => {
  const width = x2 - x1;
  const height = y2 - y1;
  return (Math.abs(width) ** p + Math.abs(height) ** p) ** (1 / p);
};

/**
 * @description Fonction de calcul d'une distance de Tchebychev entre 2 points.
 * @param {number} x1 - Abscisse du premier point.
 * @param {number} y1 - Ordonnée du premier point.
 * @param {number} x2 - Abscisse du deuxième point.
 * @param {number} y2 - Ordonnée du deuxième point.
 * @returns {number} Distance de Tchebychev entre les 2 points.
 */
const distanceTchebychev = (x1, y1, x2, y2) => {
  const width = x2 - x1;
  const height = y2 - y1;
  return Math.max(width, height);
};

/**
 * @description Fonction de calcul d'une distance de Hammings entre 2 strings.
 * @param {string} str1 - Première string.
 * @param {string} str2 - Deuxième string.
 * @returns {number} Distance de Hammings entre les 2 strings.
 */
const distanceHamming = (str1, str2) => {
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
};

/**
 * @description Fonction de calcul d'une distance de Jaccard entre 2 arrays.
 * @param {array} arr1 - Premier array.
 * @param {array} arr2 - Deuxième array.
 * @returns {number} Distance de Jaccard entre les 2 arrays.
 */
const distanceJaccard = (arr1, arr2) => {
  const union = new Set([...arr1, ...arr2]);
  const intersection = new Set([...arr1].filter((x) => arr2.includes(x)));
  return 1 - intersection.size / union.size;
};

/**
 * @description Fonction de calcul du coefficient de Sørensen-Dice entre 2 arrays.
 * @param {array} arr1 - Premier array.
 * @param {array} arr2 - Deuxième array.
 * @returns {number} Coefficient de Sørensen-Dice entre les 2 arrays.
 */
const distanceSorensenDice = (arr1, arr2) => {
  const union = new Set([...arr1, ...arr2]);
  const intersection = new Set([...arr1].filter((x) => arr2.includes(x)));
  return (2 * intersection.size) / union.size;
};

/**
 * @description Fonction de calcul d'une distance de Levenshtein entre 2 strings.
 * @param {string} str1 - Première string.
 * @param {string} str2 - Deuxième string.
 * @returns {number} Distance de Levenshtein entre les 2 strings.
 */
const distanceLevenshtein = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;
  const matrix = [];
  let i;
  let j;

  if (m === 0) return n;
  if (n === 0) return m;

  for (i = 0; i <= m; i++) {
    matrix[i] = [];
    matrix[i][0] = i;
  }
  for (j = 0; j <= n; j++) {
    matrix[0][j] = j;
  }

  for (i = 1; i <= m; i++) {
    for (j = 1; j <= n; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // suppresion
          )
        );
      }
    }
  }
  return matrix[m][n];
};

/**
 * @description Fonction de calcul de la formule de haversine
 * pour déterminer la distance du grand cercle
 * entre deux points d'une sphère,
 * à partir de leurs longitudes et latitudes
 * @param {number} lat1 - Latitude du premier point.
 * @param {number} lon1 - Longitude du premier point.
 * @param {number} lat2 - Latitude du deuxième point.
 * @param {number} lon2 - Longitude du deuxième point.
 * @returns {number} Distance du grand cercle entre les 2 points.
 */
const formuleHaversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // metres
  const phi1 = (lat1 * Math.PI) / 180; // phi, lambda en radians
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) *
      Math.cos(phi2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const result = ((R * c) / 1000).toFixed(2); // en kilomètres
  return result;
};

// Tests
console.table({
  "distanceEuclidienne(0, 0, 1, 1)": distanceEuclidienne(0, 0, 1, 1),
  "distanceManhattan(0, 0, 1, 1)": distanceManhattan(0, 0, 1, 1),
  "distanceMinkowski(0, 0, 1, 1, 1)": distanceMinkowski(0, 0, 1, 1, 1),
  "distanceTchebychev(0, 0, 1, 1)": distanceTchebychev(0, 0, 1, 1),
  "distanceHamming('000', '101')": distanceHamming("000", "101"),
  "distanceJaccard([0, 0, 0], [1, 0, 1])": distanceJaccard(
    [0, 0, 0],
    [1, 0, 1]
  ),
  "distanceSorensenDice([0, 0, 0], [1, 0, 1])": distanceSorensenDice(
    [0, 0, 0],
    [1, 0, 1]
  ),
  "distanceLevenshtein('000', '101')": distanceLevenshtein("000", "101"),
  "formuleHaversine(0, 0, 1, 1)": formuleHaversine(0, 0, 1, 1),
});
