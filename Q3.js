var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

function isPalindrome(num) {
    var str = num.toString();
    var rev = str.split("").reverse().join("");
    return str === rev;
}

var answer = -1;

for (var X = 0; X <= 100000; X++) {
    var value = N + X;

    if (value % K === 0 && isPalindrome(value)) {
        answer = X;
        break;
    }
}

alert(answer);
