/**
 * Renvoie une sequence de fibonacci dans un tableau.
 * @param {number} int - Le nombre de valeurs de la sequence.
 * @returns {Array} Un tableau contenant la sequence de fibonacci.
 */
const fibonacci = int => {
    let array = [];
    for (let i = 0; i < int; i++) {
        if (i < 2) {
            array.push(i);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;
}

// Test
console.log(fibonacci(50), "\nNombre à l'index 11: ", fibonacci(50)[11]);