class GameOfLife {
  constructor(currentBoard) {
    this.currentBoard = currentBoard
    this.resultBoard = ''
  }

  next() {
    const boardLines = this.currentBoard.split('\n')
    // splitting string into an array.  result [1,1][.]
    const boardSizeLine = boardLines.shift()
    //spliting into multiple strings into an array. [1 2] becomes [1],[2]
    const boardSizeTokens = boardSizeLine.split(' ')

    this.resultBoard = this._runProgram(boardSizeTokens, boardLines)

    return this.resultBoard
  }

  _runProgram(boardSizeTokens, boardLines) {
    let startBoard = []
    let tempBoardResult = ''

    // get xy

    const x = boardSizeTokens[1]
    const y = boardSizeTokens[0]

    tempBoardResult = `${y} ${x}`

    const firstLine = boardLines[0]
    // returns a data structure of 2d array
    startBoard = this._createBoard(y, x, boardLines)

    // TODO: make only one return
    if (!firstLine) {
      return tempBoardResult
    }

    // build board
    startBoard = this._createBoard(y, x, boardLines)

    // print board
    const filteredLine = this._printBoard(startBoard)

    tempBoardResult += `\n${filteredLine}`

    return tempBoardResult
  }

  _printBoard(board) {
    let _board = ''
    const xMax = board[0].length
    const yMax = board.length

    for (let y = 0; y < yMax; y++) {
      for (let x = 0; x < xMax; x++) {
        let neighbors = 0
        // TODO REFACTOR to use _hasNeighbor method
        if (y + 1 < yMax && x - 1 < xMax) {
          neighbors = board[y + 1][x - 1] === '*' ? neighbors + 1 : neighbors
        }
        if (y + 1 < yMax) {
          if (board[y + 1][x] === '*') {
            neighbors++
          }
        }
        if (y + 1 < yMax && x + 1 < xMax) {
          neighbors = board[y + 1][x + 1] === '*' ? neighbors + 1 : neighbors
        }
        if (x - 1 < xMax) {
          neighbors = board[y][x - 1] === '*' ? neighbors + 1 : neighbors
        }
        if (x + 1 < xMax) {
          neighbors = board[y][x + 1] === '*' ? neighbors + 1 : neighbors
        }

        neighbors += this._hasNeighbor(board, yMax, xMax, y - 1, x - 1)
        neighbors += this._hasNeighbor(board, yMax, xMax, y - 1, x)
        neighbors += this._hasNeighbor(board, yMax, xMax, y - 1, x + 1)

        const isAlive = this._isAlive(board[y][x], neighbors)
        _board += isAlive
      }

      _board += '\n'
    }

    _board = _board.trimRight('\n')

    return _board
  }

  _createBoard(y, x, boardChar) {
    const board = []
    for (let i = 0; i < y; i++) {
      const row = []
      for (let n = 0; n < x; n++) {
        const column = boardChar[i][n]
        row.push(column)
      }
      board.push(row)
    }
    return board
  }

  _hasNeighbor(board, yMax, xMax, y, x) {
    let neighbor = 0
    if (y >= 0 && y < yMax && x >= 0 && x < xMax) {
      if (board[y][x] === '*') {
        neighbor = 1
      }
    }
    return neighbor
  }

  _isAlive(cell, neighbors) {
    // TODO: function for setAlive
    const isAlive = cell === '*'
    let value = '.'
    if (isAlive && (neighbors == 3 || neighbors == 2)) {
      value = '*'
    }
    if (isAlive && neighbors > 3) {
      value = '.'
    }
    if (!isAlive && neighbors == 3) {
      value = '*'
    }

    return value
  }
}
module.exports = GameOfLife
