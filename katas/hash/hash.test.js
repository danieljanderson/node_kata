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
const GameOfLife = require('./hash')

// #ZOMBIES

// test suite
describe('first hash', function() {
  // individual test
  // ZI
  it('Create Hash interface', function() {
    // TODO: FIRST TEST

    // ARRANGE
    const expected = 7
    const gameOfLife = new Hash(0)
    // ACT
    const actual = HashtoString.convert()
    // ASSERT
    assert.deepEqual(expected, actual)
  })
})
