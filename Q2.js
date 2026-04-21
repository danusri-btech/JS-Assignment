var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var current = N;

for (var i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

var result = "NO";

if (current >= 100 && current <= 999) {
    var middle = Math.floor(current / 10) % 10;
    if (middle === seed) {
        result = "YES";
    }
}

alert(result + ", " + current);
