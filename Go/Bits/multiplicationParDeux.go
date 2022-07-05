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

//Output:
// 1   << 1 = 2
// 2   << 1 = 4
// 4   << 1 = 8
// 8   << 1 = 16
// 16  << 1 = 32
// 32  << 1 = 64
// 64  << 1 = 128
// 128 << 1 = 256
// 256 << 1 = 512
// 512 << 1 = 1024
