let sing = function () {
    let arr = [];
    for (let n = 99; n > 2; n--){
      arr.push(`${n} bottles of beer on the wall, ${n} bottles of beer.`)
      arr.push(`Take one down and pass it around, ${n - 1} bottles of beer on the wall.`)
    }
    
    arr.push('2 bottles of beer on the wall, 2 bottles of beer.')
    arr.push('Take one down and pass it around, 1 bottle of beer on the wall.')
    arr.push('1 bottle of beer on the wall, 1 bottle of beer.');
    arr.push('Take one down and pass it around, no more bottles of beer on the wall.')
    arr.push('No more bottles of beer on the wall, no more bottles of beer.')
    arr.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
    return arr;
};

console.log(sing())