const sipherString = 'acegikoprs'

class HashtoString {
  constructor() {}

  convert() {
    const sipherNumbers = 675217408078
    this.sipher = this.gen_hash(sipherNumbers)

    // 7 permutations of dividing [37-46]

    // print [a-s][a-s][a-s]
    // TODO: implement to 7 deep
    for (let a of sipherString) {
      for (let b of sipherString) {
        for (let c of sipherString) {
          console.log(a + b + c)

          if (this.gen_hash(a + b + c) === sipherNumbers) {
            return a + b + c
          }
        }
      }
    }
  }

  // TODO: get other examples working
  // unit test and walk through a few more examples
  gen_hash(hashString) {
    let hex = 7
    for (let i = 0; i < hashString.length; i++) {
      hex = hex * 37 + hashString.indexOf(sipherString[i])
    }
    return hex
  }
}
module.exports = HashtoString
