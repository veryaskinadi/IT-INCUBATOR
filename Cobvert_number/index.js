function digitize(n) {
    let arr = String(n).split("");
   return arr.map(Number).reverse()
}

console.log(digitize(1234))