const fizzBuzz = upperBound => {
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

function Fizzbuzz(upperBound) {
  this.upperBound = upperBound
  this.setArray = []
  // why doesnt this.isFizzbuzz = function (this.setArray) work
  this.isFizzbuzz = function() {
    for (let i = 1; i <= this.upperBound; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.setArray.push('FizzBuzz')
      } else if (i % 3 === 0) {
        this.setArray.push('Fizz')
      } else if (i % 5 === 0) {
        this.setArray.push('Buzz')
      } else {
        this.setArray.push(i.toString())
      }
    }
  }
}
