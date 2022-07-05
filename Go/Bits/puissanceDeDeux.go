package main

import "fmt"

func puissanceDeDeux(n int) bool {
	return n&(n-1) == 0
}

func main() {
	cases := []int{1, 2, 3, 4, 16, 31, 64}
	for _, c := range cases {
		fmt.Printf("%d est une puissance de deux = %t\n", c, puissanceDeDeux(c))
	}
}

//Output:
// 1  est une puissance de deux = true
// 2  est une puissance de deux = true
// 3  est une puissance de deux = false
// 4  est une puissance de deux = true
// 16 est une puissance de deux = true
// 31 est une puissance de deux = false
// 64 est une puissance de deux = true
