/**
 * Chiffrement de texte par OU exclusif (XOR)
 * @param {string} str1 - Texte à chiffrer
 * @param {string} str2 - Texte à chiffrer
 * @returns {string} result - Texte chiffré
 */
const chiffrementXor = (str1, str2) => {
	let result = '';
	const strMin = Math.min(str1.length, str2.length);
	const strToHex = str => parseInt(str,16);
	for (i=0; i<strMin; i++) {
		result += (strToHex(str1[i]) ^ strToHex(str2[i])).toString(16);
        // console.log(str1[i],strToHex(str1[i]));
        console.log(str2[i],strToHex(str2[i]));
        
	}
	return result;
}

// Test 
console.log(chiffrementXor('abcdef', '0123456789')); // aaeeaa
console.log(chiffrementXor('9344637f8475f2d', 'f954fb6942026a4ea')); // 6a109816c677989

/*
Le codage est effectué par une opération XOR sur deux chaînes de caractères données. 
Si les chaînes sont de longueurs différentes, la sortie sera la longueur de la chaîne la plus courte.
Chaque caractère est codé en hexadécimal.
Pour 'abcdef': 10, 11, 12, 13, 14, 15 (string min, 6 caractères) 
Pour '012345': 0, 1, 2, 3, 4, 5 (6 caractères)
Pour '9344637f8475f2d': 9, 3, 4, 4, 6, 3, 7, 15, 8, 4, 7, 5, 15, 2, 13 (string min, 15 caractères)
Pour 'f954fb6942026a4': 15, 9, 5, 4, 15, 11, 6, 9, 4, 2, 0, 2, 6, 10, 4 (15 caractères)
*/
