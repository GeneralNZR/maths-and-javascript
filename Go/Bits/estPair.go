package main

import "fmt"

//Vérifie si un nombre est pair.
func estPair(n int) bool {
	return n&1 == 0
}

func main() {
	fmt.Println(estPair(6))  //true
	fmt.Println(estPair(11)) //false
}
