package main

import "fmt"

//Vérifie si un nombre est positif.
func estPositif(n int) bool {
	return n>>31 == 0
}

func main() {
	fmt.Println(estPositif(1))  //true
	fmt.Println(estPositif(-1)) //false
}
