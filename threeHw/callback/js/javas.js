// 1
function myName() {
    return "Malek";
}
function cool(callback) {
    callback();
}
myName(cool);

//  2
function randNum() {
    return (17);
}
randNum(cool);

// 3
function disNum(num) {
    alert(num);
}
function nice(callback) {
    callback(42);
}
nice(disNum);

// 4
function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    document.write("Num: " + num);
}
function randNumb(num1, num2, num3, num4, num5) {
    alert(num3);
    return (num3);
}
amazing(randNumb);