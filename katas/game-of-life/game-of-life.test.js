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
const GameOfLife = require('./game-of-life')

// #ZOMBIES

// test suite
describe('Game of Life', function() {
  // individual test
  // ZI
  it('Create Game of Life interface', function() {
    // TODO: FIRST TEST

    // ARRANGE
    const expected = '0 0'
    const gameOfLife = new GameOfLife('0 0')
    // ACT
    const actual = gameOfLife.next()
    // ASSERT
    assert.deepEqual(expected, actual)
  })

  // O
  it('Create Game of Life one dead cell', function() {
    // ARRANGE
    // 1 1
    // .
    const expected = '1 1\n.'
    const gameOfLife = new GameOfLife('1 1\n.')
    // ACT
    const actual = gameOfLife.next()
    // ASSERT
    assert.deepEqual(expected, actual)
  })
  it('Create Game of Life one alive cell', function() {
    // ARRANGE
    // 1 1
    // .
    const expected = '1 1\n.'
    const gameOfLife = new GameOfLife('1 1\n*')
    // ACT
    const actual = gameOfLife.next()
    // ASSERT
    assert.deepEqual(expected, actual)
  })
  it('Create Game of Life two dead cell', function() {
    // ARRANGE
    // 1 2
    // ..
    const expected = '1 2\n..'
    const gameOfLife = new GameOfLife('1 2\n..')
    // ACT
    const actual = gameOfLife.next()
    // ASSERT
    assert.deepEqual(expected, actual)
  })
  it('Create Game of Life one dead cell and one alive', function() {
    // ARRANGE
    // 1 2
    // .*
    const expected = '1 2\n..'
    const gameOfLife = new GameOfLife('1 2\n.*')
    // ACT
    const actual = gameOfLife.next()
    // ASSERT
    assert.deepEqual(expected, actual)
  })
  it('Create Game of Life two alive', function() {
    // ARRANGE
    // 1 2
    // **
    const expected = '1 2\n..'
    const gameOfLife = new GameOfLife('1 2\n**')
    // ACT
    const actual = gameOfLife.next()
    // ASSERT
    assert.deepEqual(expected, actual)
  })

  // it('Create Game of Life three alive', function() {
  //   // ARRANGE
  //   // 1 3
  //   // ***
  //   const expected = '1 3\n.*.'
  //   const gameOfLife = new GameOfLife('1 3\n***')
  //   // ACT
  //   const actual = gameOfLife.next()
  //   // ASSERT
  //   assert.deepEqual(expected, actual)
  // })
})
