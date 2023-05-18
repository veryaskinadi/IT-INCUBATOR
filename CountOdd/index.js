function oddCount(n){
    let arr = [];
    for (let i = 1; i < n; i++){
      console.log(arr);
      if (i % 2 == 1) {
        arr.push(i);
      }
    }
    return arr.length;
}

console.log(oddCount(-7));


function oddCount(n) {
    return Math.floor(n/2);
}