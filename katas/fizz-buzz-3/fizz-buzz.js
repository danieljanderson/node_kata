class FizzBuzz {
  constructor(upperBound) {
    this.upperBound = upperBound
  }
  fizzBuzz() {
    const result = []
    for (let i = 1; i <= this.upperBound; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz')
      } else if (i % 3 === 0) {
        result.push('Fizz')
      } else if (i % 5 === 0) {
        result.push('Buzz')
      } else {
        result.push(i.toString())
      }
    }
    this.result = result
  }
}
module.exports = FizzBuzz
