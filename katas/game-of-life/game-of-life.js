class GameOfLife {
  constructor(currentBoard) {
    this.currentBoard = currentBoard
  }
  next() {
    const boardLines = this.currentBoard.split('\n')
    console.log(boardLines)

    const boardSizeLine = boardLines.shift()
    const boardSizeTokens = boardSizeLine.split(' ')

    console.log(boardLines)

    return this.currentBoard.replace('*', '.')
  }
}
module.exports = GameOfLife
