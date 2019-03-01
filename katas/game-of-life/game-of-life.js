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

    this.resultBoard = this._checkAlive(boardSizeTokens, boardLines)

    return this.resultBoard
  }

  _checkAlive(boardSizeTokens, boardLines) {
    let tempBoardResult = ''
    const x = boardSizeTokens[0]
    const y = boardSizeTokens[1]

    tempBoardResult = this._printBoard(x) + ' ' + this._printBoard(y)
    tempBoardResult += (boardLines[0] && `\n${boardLines[0].replace(/\*/g, '.')}`) || ''

    // create data structure
    const board = []
    for (let i = 0; i < x; i++) {
      const row = []
      for (let n = 0; n < y; n++) {
        const column = [boardLines[i][n]]
        row.push(column)
      }
      board.push(row)
    }

    return tempBoardResult
    /*

    // populate data sctructure

    // calculate next for each cell
    // next == '.'

    // translate into string for response
    for (let i = 0; i <= boardSizeTokens.length - 1; i++) {
      if (boardSizeTokens[i] === '.' || boardSizeTokens[i + 1 === '.']) {
        tempBoardResult = '..'
      } else {
        tempBoardResult = '**'
      }
      return tempBoardResult
    }
    */
  }
  _printBoard(array) {
    array.toString()
    return array
  }
}
module.exports = GameOfLife
