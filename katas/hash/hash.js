class HashtoString {
  constructor(currentBoard) {
    this.currentBoard = currentBoard
    this.string = ''
  }

  convert() {
    const sipherNumbers = '675217408078'
    this.sipher = this._hashToString(sipherNumbers)
  }
  gen_hash(sipherNumbers) {
    const orginalString = 'acegikoprs'
    const hex = 7
    for (let i = 0; i < letters.length; i++) {
      hex = hex * 37 + letters.indexOf(sipherText[i])
    }
    return hex
  }
}
module.exports = HashtoString
