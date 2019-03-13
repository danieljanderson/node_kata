class HashtoString {
  constructor(currentBoard) {
    this.currentBoard = currentBoard
    this.string = ''
  }

  convert() {
    const orginalString = 'acegikoprs'
    const sipher = 675217408078
    this.sipher = this._hashToString(sipher)
  }
  _hashToString(sipherText, letters) {
    const hex = 7
    for (let i = 0; i < letters.length; i++) {
      hex = hex * 37 + letters.indexOf(sipherText[i])
    }
    return hex
  }
}
module.exports = GameOfLife
