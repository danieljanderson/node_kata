/*
# Three Laws of Test Driven Development
- You are not allowed to write any production code unless it is to make a failing unit test pass.
- You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
- You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
*/

/*
D - Don't
R - Repeat
Y - Yourself
*/

/*
# ZOMBIES
Z - Zero
O - One
M - Many
B - Boundary Behavior
I - Interface Definition
E - Exercise Exception Behavior
S - Simple
*/

const assert = require('assert')
const FizzBuzz = require('./fizz-buzz')

// test suite
describe('Fizz Buzz', function() {
  // individual test
  it('Create Fizz Buzz interface', function() {
    // TODO: FIRST TEST
    const expected = ['1']
    const actual = FizzBuzz.fizzBuzz(1)
    assert.deepEqual(expected, actual)
  })
  it('Create Fizz Buzz sequence', function() {
    const expected = ['1', '2']
    const actual = FizzBuzz.fizzBuzz(2)
    assert.deepEqual(expected, actual)
  })
  it('Create Fizz Buzz Fizz', function() {
    const expected = ['1', '2', 'Fizz']
    const actual = FizzBuzz.fizzBuzz(3)
    assert.deepEqual(expected, actual)
  })
  it('Create Fizz Buzz Buzz', function() {
    const expected = ['1', '2', 'Fizz', '4', 'Buzz']
    const actual = FizzBuzz.fizzBuzz(5)
    assert.deepEqual(expected, actual)
  })

  it('Example Fizz Buzz', function() {
    const expected = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]
    const actual = FizzBuzz.fizzBuzz(15)

    assert.deepEqual(expected, actual)
  })
})
