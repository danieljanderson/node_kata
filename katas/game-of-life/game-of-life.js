class GameOfLife {
  constructor(currentBoard) {
    this.currentBoard = currentBoard
    this.resultBoard = ''
  }

  next() {
    const boardLines = this.currentBoard.split('\n')

    const boardSizeLine = boardLines.shift()
    const boardSizeTokens = boardSizeLine.split(' ')

    this.resultBoard = this._checkAlive(boardSizeTokens, boardLines)

    return this.resultBoard
  }

  _checkAlive(boardSizeTokens, boardLines) {
    let tempBoardResult = ''
    const y = boardSizeTokens[0]
    const x = boardSizeTokens[1]

    tempBoardResult = `${y} ${x}`
    tempBoardResult += (boardLines[0] && `\n${boardLines[0].replace(/\*/g, '.')}`) || ''

    // create data structure
    const board = []
    for (let i = 0; i < y; i++) {
      const row = []
      for (let n = 0; n < x; n++) {
        const column = ['.']
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
}
module.exports = GameOfLife
