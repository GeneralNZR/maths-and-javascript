package main

import . "fmt"

//Vérifie si un nombre est positif.
func estPositif(n int) bool {
	return n>>31 == 0
}

func main() {
	Println(estPositif(1))  //true
	Println(estPositif(-1)) //false
}
