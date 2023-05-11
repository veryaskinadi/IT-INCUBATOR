function isPalindrome(x) {
    let a = x.toLowerCase().split("").reverse().join('');
    console.log(a);
    b = x.toLowerCase();
    console.log(b);
    if (b == a) {
      return true
    } else {
      return false
    }
}

console.log(isPalindrome('Abba'));