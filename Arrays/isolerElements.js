/**
 * Isoler les éléments doublons d'un tableau dans un autre, sans changer l'ordre des éléments.
 * @param {Array} arr - Le tableau d'origine.
 * @param {Array} sub - Le tableau dans lequel seront stockés les éléments isolés.
 * @param {Object} e - L'élément à isoler.
 * @returns {Array} Le tableau d'origine moins les éléments isolés, et le tableau d'éléments isolés.
 */
const isolerElements = (arr, sub, e) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      sub.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }
  return [arr, sub];
};

// Test
console.log(
  isolerElements([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [], 1)
);

/*
[
  [
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    1, 1, 1, 1,
    1, 1, 1, 1
  ]
]
*/
