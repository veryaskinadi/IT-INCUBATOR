function reverseSeq(n) {
    let arr = [];
    for(var i = n; i > 0; i--) {
        if (n % 1 == 0) {
            arr.push(n);
            n -= 1;
        }
    }
   return arr;
}


console.log(reverseSeq(5));