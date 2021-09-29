/**
 * Récupère un bit d'un nombre selon un index
 * @param {number} number
 * @param {number} position - basé sur 0.
 * @return {number} 0 ou 1
 */
const getBit = (int, position) => (int >> position) & 1;  

// Tests
console.log(getBit(2, 0)); // 0
console.log(getBit(2, 1)); // 1