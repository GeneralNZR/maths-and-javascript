/**
 * @description Fonction qui calcule la somme des chiffres d'un nombre
 * @param {number} n - Nombre à calculer
 * @returns {number} - Somme des chiffres du nombre
 */
const sommeChiffres = (n) => {
    let somme = 0;
    while (n > 0) {
        somme += n % 10;
        n = ~~(n / 10);
    }
    return somme;
    }

// Test
console.log(sommeChiffres(1010101)); // 4