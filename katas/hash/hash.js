const sipherString = 'acegikoprs'

class HashtoString {
  constructor() {}

  convert() {
    const sipherNumbers = 675217408078

    // print [a-s][a-s][a-s]
    // TODO: implement to 7 deep
    for (let a of sipherString) {
      for (let b of sipherString) {
        for (let c of sipherString) {
          for (let d of sipherString) {
            for (let e of sipherString) {
              for (let f of sipherString) {
                for (let g of sipherString) {
                  if (this.gen_hash(a + b + c + d + e + f + g) === sipherNumbers) {
                    console.log(a + b + c + d + e + f + g)
                    return a + b + c + d + e + f + g
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // TODO: get other examples working
  // unit test and walk through a few more examples
  gen_hash(hashString) {
    var hex = 7
    for (let i = 0; i < hashString.length; i++) {
      hex = hex * 37 + sipherString.indexOf(hashString[i])
    }
    return hex
  }
}

module.exports = HashtoString
