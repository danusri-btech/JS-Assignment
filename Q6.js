var a = parseInt(prompt("Enter correct answers:"));
var b = parseInt(prompt("Enter partial answers:"));
var c = parseInt(prompt("Enter wrong answers:"));

var score = 3 * a + b - 2 * c;

if (score < 0) {
    score = 0;
}

if (a + b + c > 50) {
    score -= 10;
}

var status = "FAIL";
if (score >= 60) {
    status = "PASS";
}

alert(score + ", " + status);
