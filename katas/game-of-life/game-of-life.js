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
    // apply life rules
    board = board.toString()
    board = board.replace(/,/g, '')
    board = board.replace(/\*/g, '.')
    return board
  }

  _createBoard(y, x, boardChar) {
    // create data structure
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
  _checkAlive(y, x, boardChar) {
    const board = []
    if (x === 0 && y === 0) {
      board = []
    } else {
      for (let rowNumber = 0; rowNumber < x; rowNumber++) {
        const row = []
        for (let columnNumber = 0; columnNumber < y; columnNumber++) {
          const image = boardChar[rowNumber][columnNumber]

          row.push(image)
        }
        board.push(row)
      }
    }
    return board
  }
}
module.exports = GameOfLife
