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

function periodIsLate(last, today, cycleLength)
{
  return (today-last)/86400000>cycleLength
}

function integrate(c, e) {
    return `${c / (e + 1)}x^${e + 1}`
}




function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    console.log (result)
    return result;
}

function amIWilson(p) {
    if (((factorial(p - 1) + 1) / (p * p)) % 1 === 0 ) {
        console.log(((factorial(p - 1) + 1) / (p * p)))
        return true
    }    
}


amIWilson(3);



function derive(c,e) {
    return `${c * e}x^${e - 1}`
}



function unusualFive() {
    let str = "abcde"
    return str.length;
}


function opposite(number) {
    return number - number * 2;
}





