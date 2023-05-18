function repeatStr (n, s) {
    let new_str = '';
    while (n-- > 0) new_str += s;
    return new_str;
}
console.log (repeatStr (3, 'h'))