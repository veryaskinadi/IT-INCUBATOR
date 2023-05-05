findMultiples = (integer, limit) => {
    let arr = [];
    while (integer <= limit) {
        arr.push(integer);
        integer = integer + integer;
      }
    return arr;
}

function makeNegative(num) {
    if (num > 0) {
      return -num
    }
    if (num <= 0) {
      return num
    }
}