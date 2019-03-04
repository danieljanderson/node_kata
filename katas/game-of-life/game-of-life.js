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
        // _board += board[row][column]
        /*
        z[y+1,x+-1]   [y+1,x+0]   [y+1,x+1]
        z[y+0,x+-1]   z[y,x]       z[y+0,x+1]
        [y+-1,x+-1]  [y+-1,x+0]   [y+-1,x+1]
        */
        let neighbors = 0
        if (y + 1 < yMax && x - 1 < xMax) {
          neighbors = board[y + 1][x - 1] === '*' ? neighbors + 1 : neighbors
        }
        if (x - 1 < xMax) {
          neighbors = board[y][x - 1] === '*' ? neighbors + 1 : neighbors
        }
        if (x + 1 < xMax) {
          neighbors = board[y][x + 1] === '*' ? neighbors + 1 : neighbors
        }
        //console.log(neighbors)
        const isAlive = board[y][x] === '*'

        let value = '.'

        if (isAlive && neighbors >= 2) {
          value = '*'
        }
        _board += value
      }
      _board += '\n'
    }

    _board = _board.trimRight('\n')

    // apply life rules
    /*
    x max = x.length -1
    y max = y.length - 1

    x min = -1
    y min = -1

    given y and x
    [y+1,x+-1]   [y+1,x+0]   [y+1,x+1]
    [y+0,x+-1]   [y,x]       [y+0,x+1]
    [y+-1,x+-1]  [y+-1,x+0]  [y+-1,x+1]

    it = ***

    loop board:
     y = 1:
       x = 0 (0,1):  =>  1
         [-]    [-]      [-]
         [-]   s[0,1]   n[0,2]* 
         [-]    [-]      [-]
         x dies
       x = 1 (0, 2):  =>  2
         [-]    [-]      [-]
         [0,1]  x[0,2]   [0,3]
         [-]    [-]      [-]
         x lives
      x = 2 (0, 3):  =>  1
         [-]     [-]     [-]
         [0,2]  x[0,3]   [-]
         [-]     [-]     [-]
         x dies
    */

    return _board
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
}
module.exports = GameOfLife
