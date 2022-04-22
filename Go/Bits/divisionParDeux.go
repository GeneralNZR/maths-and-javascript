package main

import "fmt"

//Fonction qui divise un nombre par deux, grace à l'opérateur de décalage binaire à droite (>>).
func divisionParDeux(n int) int{
    return n >> 1
}

func main() {
    fmt.Println(divisionParDeux(10))
}
//Output: 5