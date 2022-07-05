package main

import "fmt"

func longueurBit(n int) int {
	nbBit := 0
	for n > 0 {
		nbBit += 1
		n = n >> 1
	}
	return nbBit
}

func main() {
	cases := []int{1, 8, 512, 4096, 16384, 16777216, 35184372088832, 4611686018427387904}
	for _, c := range cases {
		fmt.Printf("%d bits = %d\n", c, longueurBit(c))
	}
}

//Output :
// 1 bits = 1
// 8 bits = 4
// 512 bits = 10
// 4096 bits = 13
// 16384 bits = 15
// 16777216 bits = 25
// 35184372088832 bits = 46
// 4611686018427387904 bits = 63
