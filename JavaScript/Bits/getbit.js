/**
 * @description Récupère le i-ème bit de n.
 * @param {number} n - Le nombre à traiter
 * @param {number} i - L'index du bit à récupérer
 * @return {number} 0 ou 1
 */
const getBit = (n, i) => (n >> i) & 1;

// Tests
console.log(getBit(2, 0)); // 0
console.log(getBit(2, 1)); // 1
