package main

import "fmt"

func sommeChiffres(n int) int {
	somme := 0
	for n > 0 {
		somme += n % 10
		n /= 10
	}
	return somme
}

func main() {
	cases := []int{1, 11, 111, 55, 8219, 999999999999999999, 9223372036854775807}
	for _, c := range cases {
		fmt.Printf("Σ digits of %d = %d\n", c, sommeChiffres(c))
	}
}

//Output:
// Σ digits of 1 = 1
// Σ digits of 11 = 2
// Σ digits of 111 = 3
// Σ digits of 55 = 10
// Σ digits of 8219 = 20
// Σ digits of 999999999999999999 = 162
// Σ digits of 9223372036854775807 = 88
