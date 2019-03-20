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
const HashtoString = require('./hash')

// #ZOMBIES

// test suite
describe('first hash', function() {
  // individual test
  // ZI
  it('Create Hash interface', function() {
    // TODO: FIRST TEST

    // ARRANGE
    const expected = 7
    const hashProgram = new HashtoString()
    // ACT
    const actual = hashProgram.gen_hash('')
    // ASSERT
    assert.deepEqual(expected, actual)
  })
  it('one letter', function() {
    // ARRANGE
    const expected = 259
    const hashProgram = new HashtoString()
    // ACT
    const actual = hashProgram.gen_hash('a')
    // ASSERT
    assert.deepEqual(expected, actual)
  })
  it('solution that they gave me', function() {
    // ARRANGE
    const expected = 677850704066
    const hashProgram = new HashtoString()
    // ACT
    const actual = hashProgram.gen_hash('kppracg')
    // ASSERT
    assert.deepEqual(expected, actual)
  })
  it('number that they gave me to find a string', function() {
    // ARRANGE
    const hashProgram = new HashtoString()
    // ACT
    const actual = hashProgram.convert()
    // ASSERT
    assert.notEqual(null, actual)
  })
})
