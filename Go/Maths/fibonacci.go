package main

import "fmt"

//Recursive
func fib(n uint) uint {
	if n < 2 {
		return n
	}
	return fib(n-1) + fib(n-2)
}

//Iterative
func fibIter(n uint) uint {
	if n < 2 {
		return n
	}
	var x, y uint = 0, 1
	for i := uint(0); i < n; i++ {
		x, y = y, x+y
	}
	return y
}

//Goroutine and channel
func fibGo(z chan int) {
	x, y := 0, 1
	for {
		z <- x
		x, y = y, x+y
	}
}

func main() {
	casesRec := []uint{1, 2, 4, 8, 16, 32}
	casesIter := []int{32, 64, 128, 256, 512, 1024}
	for _, a := range casesRec {
		fmt.Printf("fib(%d) = %d\n", a, fib(a))
	}
	for _, b := range casesIter {
		fmt.Printf("fibIter(%d) = %d\n", b, fibIter(uint(b)))
	}
	casesGo := make(chan int)
	go fibGo(casesGo)
	for i := 0; i < 66; i++ {
		fmt.Printf("fibGo(%d) = %d\n", i, <-casesGo)
	}
}

//Output:
// fib(1) = 1
// fib(2) = 1
// fib(4) = 3
// fib(8) = 21
// fib(16) = 987
// fib(32) = 2178309
// fibIter(32) = 3524578
// fibIter(64) = 17167680177565
// fibIter(128) = 8102862946581596898
// fibIter(256) = 616433998583868189
// fibIter(512) = 6170756297511278306
// fibIter(1024) = 3319292459396874525
// fibGo(60) = 1548008755920
// fibGo(61) = 2504730781961
// fibGo(62) = 4052739537881
// fibGo(63) = 6557470319842
// fibGo(64) = 10610209857723
// fibGo(65) = 17167680177565
