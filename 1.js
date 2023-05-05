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

function twiceAsOld(dadYearsOld, sonYearsOld) {
  
    let k = 2 * sonYearsOld
    let years = Math.abs(dadYearsOld - k)
    return years;
  
}

function expressionMatter(a, b, c) {
    let arr = [
          a+b+c,
          a*b*c,
          a*b+c,
          a*(b+c),
          a+b*c,
          (a+b)*c
        ];
    for (let i = 0; i < arr.length; i++) {
      max = arr[0];
      if(arr[i] > arr[0]){
          arr[0] = arr[i];
      }
    }
}