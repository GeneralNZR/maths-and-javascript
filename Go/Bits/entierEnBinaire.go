package main

import . "fmt"

//Convertit un entier en sa représentation binaire.
func entierEnBinaire(n uint) string {
	if n == 0 {
		return "0"
	}
	var b []byte
	for n > 0 {
		b = append(b, byte(n&1)+48) //On ajoute 48 pour avoir le chiffre 0 en ASCII.
		n >>= 1
	}
	return string(b)
}

func main() {
	Println(entierEnBinaire(5))
}

//Output: 101
