// question 1
var names = [5], s = "";
for (var i = 0; i < 5; i++) {
    names[i] = prompt("Enter Names");
}
alert(names[0] + " " + names[4]);
for (var i = 0; i < 5; i++) {
    s += names[i] + "\n";
}
alert(s);
s = "";
for (var i = 4; i >= 0; i--) {
    s += names[i];
}
alert(s);

// question 2
var names = [4], s = "";
names[0] = "apple";
names[1] = "banna";
names[2] = "tofa7";
names[3] = "lemon";
s += names[0] + "\n" + names[1] + "\n" + names[2] + "\n" + names[3];
alert(s);
s = "";
for (var i = 3; i >= 0; i--) {
    s += names[i] + "\n";
}
alert(s);

// question 3
var grades = [10], s = "";
for (var i = 0; i < 10; i++) {
    grades[i] = +prompt("enter grade");
    if (grades[i] > 100 || grades[i] < 0)
        s += grades[i] + "\n";
}
if (s != "") {
    alert(s);
}
else
    alert("all grades are legal");

// question 4
var arr = [20], s = "", sum = 0, min = 0, max = 0;
for (var i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 10) + 1;
}
for (var i = 19; i >= 0; i) {
    s + arr[i] + " ";
}
alert(s);
for (var i = 0; i < 20; i++) {
    sum += arr[i];
}
alert(sum + "is the total " + (sum / 20) + "is the average");
min = arr[0];
for (var i = 1; i < 20; i++) {
    if (arr[i] < min)
        min = arr[i];
}
alert(min);
max = arr[0];
for (var i = 1; i < 20; i++) {
    if (arr[i] > max)
        max = arr[i];
}
alert(max);

// question 20
var n, s = "";
n = +prompt("enter number");
for (var i = 1; i <= n; i++) {
    s = s + "\n";
}
alert(s);

// quesrion 21
var n, s = "", w = "";
n = +prompt("enter number");
for (var i = n; i >= n; i--) {
    w = +i;
}
for (var i = n; i >= n; i--) {
    s += w + "\n";
}
alert(s);

// question 22
var num, s = "";
num = +prompt("enter num");
while (num > 0) {
    s=";"
    for (var i = num; i <= num; i--)
        s += i;
    alert(s);
    num = prompt("enter another num");
}
// question 1
var num24, s = "";
num24 = +prompt('Enter Num');
for (var i = 0; i < num24; i++) {
    s += "\n"
    for (var j = 0; j < num24; j++) {
        s += "*";
    }
}
console.log(s);

// question 2
var num25, num26, s1 = " ";
num25 = +prompt("Enter Height");
num26 = +prompt("Enter Leinght");
for (var i = 0; i < num25; i++) {
    s1 += "\n";
    for (var j = 0; j < num26; j++) {
        s1 += "*";
    }
}
console.log(s1);