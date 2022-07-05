package main

import "fmt"

func multiplicationParDeux(n int) int {
	return n << 1
}

func main() {
	cases := []int{1, 2, 4, 8, 16, 32, 64, 128, 256, 512}
	for _, c := range cases {
		fmt.Printf("%d << 1 = %d\n", c, multiplicationParDeux(c))
	}
}
