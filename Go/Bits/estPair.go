package main

import . "fmt"

//Vérifie si un nombre est pair.
func estPair(n int) bool {
	return n&1 == 0
}

func main() {
	Println(estPair(6))
	Println(estPair(11))
}

//Output: true
//		  false
