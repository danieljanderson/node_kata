const fizzBuzz = upperBound => {
  let counter = []
  for (let i = 1; i <= upperBound; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      counter.push('FizzBuzz')
    } else if (i % 3 === 0) {
      counter.push('Fizz')
    } else if (i % 5 === 0) {
      counter.push('Buzz')
    } else {
      counter.push(i.toString())
    }
  }
  return counter
}
module.exports = { fizzBuzz }
