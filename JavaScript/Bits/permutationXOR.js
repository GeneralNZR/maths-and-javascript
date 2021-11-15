/**
 * @description Algorithme pour échanger les valeurs de deux variables
 * sans utiliser la variable temporaire qui est normalement requise
 * avec l'opérateur " ^ " OU exclusif (XOR).
 * @param {number} x - Premier nombre
 * @param {number} y - Second nombre
 * @returns {Array} Tableau contenant les deux nombres
 */
const permutationXOR = (x, y) => [x ^ x ^ y, y ^ y ^ x];

// Test
console.log(permutationXOR(0, 1)); // [1, 0]

/* ------------------- 
 │ x   │ y   │ x ^ y │
 ├─────┼─────┼───────┤
 │ 0   │ 0   │   0   │
 │ 1   │ 1   │   0   │
 │ 0   │ 1   │   1   │
 │ 1   │ 0   │   1   │ 
 ------------------- */
