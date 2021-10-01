/**
 * Découper un tableau en sous-tableaux.
 * @param {Array} arr - Le tableau à découper.
 * @param {Number} n - Le nombre de sous-tableaux.
 * @returns {Array} - Les sous-tableaux.
 */ 
const sousTableaux = (arr, n) => {
  let sub = [], i = 0, j = 0;
    while (i < arr.length) {
        sub[j++] = arr.slice(i, i += n);
    }
    return sub;
}

// Test
console.log(sousTableaux([0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1], 3));

/*
[
  [ 0, 0, 0 ],
  [ 1, 0, 0 ],
  [ 1, 1, 0 ],
  [ 1, 1, 1 ],
  [ 0, 1, 1 ],
  [ 0, 0, 1 ]
]
*/