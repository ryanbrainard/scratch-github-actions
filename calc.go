package scratch

type Calculator interface {
	Add(numbers ...int) int
}

type calc struct{}

func (calc) Add(numbers ...int) int {
	sum := 0
	for _, n := range numbers {
		sum += n
	}
	return sum
}
