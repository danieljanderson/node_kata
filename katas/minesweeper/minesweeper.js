class Minesweeper {
  constructor(inputFields) {
    this.inputFields = inputFields
    this.resultFields = ''
  }

  sweepBoard() {
    const boardLines = this.inputFields.split('\n')
    const fields = []

    let y = 0
    let field = []

    for (let line of boardLines) {
      if (line.length === 0) {
        continue
      }

      if (y === 0) {
        // at a header
        if (field.length > 0) {
          fields.push(field)
        }
        y = line.split(' ')[0]
        field = []
        field.push(line)
      } else {
        y--
        field.push(line)
      }
    }

    if (field.length > 0) {
      fields.push(field)
    }

    for (let i = 0; i < fields.length; i++) {
      const _board = fields[i]

      const boardSizeLine = _board.shift()
      const boardSizeTokens = boardSizeLine.split(' ')

      if (this.resultFields.length > 0) {
        this.resultFields += '\n\n'
      }
      this.resultFields += this._runProgram(boardSizeTokens, _board, i)
    }

    return this.resultFields
  }
  _runProgram(boardSizeTokens, boardLines, index) {
    let startBoard = []
    let tempBoardResult = ''
    // get xy
    const x = boardSizeTokens[1]
    const y = boardSizeTokens[0]

    // returns a data structure of 2d array
    startBoard = this._createBoard(y, x, boardLines)
    tempBoardResult += 'Field #' + (index + 1) + '\n\n'
    tempBoardResult += this._printBoard(startBoard)
    return tempBoardResult
  }
  // TODO: make only one return
  //   if (!firstLine) {
  //     return tempBoardResult
  //   }
  //   // build board
  //   startBoard = this._createBoard(y, x, boardLines)
  //   // print board
  //   const filteredLine = this._printBoard(startBoard)
  //   tempBoardResult += `\n${filteredLine}`
  //   return tempBoardResult
  // }
  _printBoard(board) {
    let _board = ''
    const xMax = board[0].length
    const yMax = board.length
    for (let y = 0; y < yMax; y++) {
      for (let x = 0; x < xMax; x++) {
        // let neighbors = 0
        // neighbors += this._hasNeighbor(board, yMax, xMax, y + 1, x - 1)
        // neighbors += this._hasNeighbor(board, yMax, xMax, y + 1, x)
        // neighbors += this._hasNeighbor(board, yMax, xMax, y + 1, x + 1)
        // neighbors += this._hasNeighbor(board, yMax, xMax, y, x - 1)
        // neighbors += this._hasNeighbor(board, yMax, xMax, y, x + 1)
        // neighbors += this._hasNeighbor(board, yMax, xMax, y - 1, x - 1)
        // neighbors += this._hasNeighbor(board, yMax, xMax, y - 1, x)
        // neighbors += this._hasNeighbor(board, yMax, xMax, y - 1, x + 1)
        // const isAlive = this._isAlive(board[y][x], neighbors)
        // _board += isAlive
        _board += board[y][x].replace('.', '1')
      }
      _board += '\n'
    }
    _board = _board.trimRight('\n')
    return _board
  }
  _createBoard(y, x, board) {
    const _board = []
    for (let i = 0; i < y; i++) {
      const row = []
      for (let n = 0; n < x; n++) {
        const column = board[i][n]
        row.push(column)
      }
      _board.push(row)
    }
    return _board
  }
  // _hasNeighbor(board, yMax, xMax, y, x) {
  //   let neighbor = 0
  //   if (y >= 0 && y < yMax && x >= 0 && x < xMax) {
  //     if (board[y][x] === '*') {
  //       neighbor = 1
  //     }
  //   }
  //   return neighbor
  // }
  // _isAlive(cell, neighbors) {
  //   // TODO: function for setAlive
  //   const isAlive = cell === '*'
  //   let value = '.'
  //   if (isAlive && (neighbors == 3 || neighbors == 2)) {
  //     value = '*'
  //   }
  //   if (isAlive && neighbors > 3) {
  //     value = '.'
  //   }
  //   if (!isAlive && neighbors == 3) {
  //     value = '*'
  //   }
  //   return value
  // }
}
module.exports = Minesweeper
