package main

import (
	"fmt"
)

func entierEnBinaire(n uint) string {
	return fmt.Sprintf("%b", n)
}

func main() {
	fmt.Println(entierEnBinaire(5))
}

//Output: 101
