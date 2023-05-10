function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
};

function amIWilson(p) {
    if (((factorial(p - 1) + 1) / (p * p)) % 1 === 0 ) {
       return true
    }  else {
        return false  
    } 
};

console.log(factorial(3));