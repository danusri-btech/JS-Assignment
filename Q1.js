var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

var count = 0;

for (var x = L; x <= R; x++) {
    if (x % K !== 0) continue;

    var str = x.toString();
    if (str.includes("0")) continue;

    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }

    if (isPrime(sum)) {
        count++;
    }
}

alert(count);
