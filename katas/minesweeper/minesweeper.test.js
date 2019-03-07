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
const Minesweeper = require('./minesweeper')

// #ZOMBIES

// test suite
describe('Minesweeper', function() {
  // individual test
  // ZI
  // it('Create Minesweeper interface', function() {
  //   // TODO: FIRST TEST
  //   // ARRANGE
  //   const expected = 'Field #1\n\n*'
  //   const minesweeper = new Minesweeper('1 1\n*')
  //   // ACT
  //   const actual = minesweeper.sweepBoard()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })

  // // O
  // it('Create Minesweeper one bomb one count', function() {
  //   // ARRANGE
  //   const expected = 'Field #1\n\n*1'
  //   const minesweeper = new Minesweeper('1 2\n*.')
  //   // ACT
  //   const actual = minesweeper.sweepBoard()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })

  // it('Create Minesweeper two fields', function() {
  //   // ARRANGE
  //   // 1 2
  //   // *.
  //   //
  //   // 1 1
  //   // *

  //   const expected = 'Field #1\n\n*1\n\nField #2\n\n*'
  //   const minesweeper = new Minesweeper('1 2\n*.\n\n1 1\n*')
  //   // ACT
  //   const actual = minesweeper.sweepBoard()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })

  it('Create Minesweeper multiple fields', function() {
    // ARRANGE

    const expected = 'Field #1\n\n*1\n\nField #2\n\n*\n\nField #3\n\n**\n**\n**'
    const minesweeper = new Minesweeper('1 2\n*.\n\n1 1\n*\n\n3 2\n**\n**\n**')
    // ACT
    const actual = minesweeper.sweepBoard()
    // ASSERT
    assert.equal(expected, actual)
  })
  // it('Create Minesweeper one alive cell', function() {
  //   // ARRANGE
  //   // 1 1
  //   // .
  //   const expected = '1 1\n.'
  //   const minesweeper = new Minesweeper('1 1\n*')
  //   // ACT
  //   const actual = minesweeper.sweep()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })
  // it('Create Minesweeper two dead cell', function() {
  //   // ARRANGE
  //   // 1 2
  //   // ..
  //   const expected = '1 2\n..'
  //   const minesweeper = new Minesweeper('1 2\n..')
  //   // ACT
  //   const actual = minesweeper.sweep()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })
  // it('Create Minesweeper one dead cell and one alive', function() {
  //   // ARRANGE
  //   // 1 2
  //   // .*
  //   const expected = '1 2\n..'
  //   const minesweeper = new Minesweeper('1 2\n.*')
  //   // ACT
  //   const actual = minesweeper.sweep()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })
  // it('Create Minesweeper two alive', function() {
  //   // ARRANGE
  //   // 1 2
  //   // **
  //   const expected = '1 2\n..'
  //   const minesweeper = new Minesweeper('1 2\n**')
  //   // ACT
  //   const actual = minesweeper.sweep()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })
  // it('Create Minesweeper one alive', function() {
  //   // ARRANGE
  //   // 1 3
  //   // .*.
  //   const expected = '1 3\n.*.'
  //   const minesweeper = new Minesweeper('1 3\n***')
  //   // ACT
  //   const actual = minesweeper.sweep()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })
  // it('Create Minesweeper two alive', function() {
  //   // ARRANGE
  //   // 2 3
  //   // ***
  //   // ***

  //   // *.*
  //   // *.*

  //   const expected = '2 3\n*.*\n*.*'
  //   const minesweeper = new Minesweeper('2 3\n***\n***')
  //   // ACT
  //   const actual = minesweeper.sweep()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })
  // it('Create Minesweeper dead cell becomes alive', function() {
  //   // ARRANGE
  //   // 2 2
  //   // .*
  //   // **

  //   // **
  //   // **

  //   const expected = '2 2\n**\n**'
  //   const minesweeper = new Minesweeper('2 2\n.*\n**')
  //   // ACT
  //   const actual = minesweeper.sweep()
  //   // ASSERT
  //   assert.equal(expected, actual)
  // })
})
