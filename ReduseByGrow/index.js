function grow(x){
    let n = 1;
    for (let i = 0; i < x.length; i++) {
     n *= x[i];
     console.log(n);
    }
    return n;
}

console.log(grow([1, 3, 5]));