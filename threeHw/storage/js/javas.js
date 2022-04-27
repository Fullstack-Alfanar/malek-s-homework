// question 1
function send() {
    let x = document.getElementById('email');
    if (checkEmail(x.value))
        document.cookie = x.value;
    else alert('enter valid email');
}
function load() {
    let y = document.cookie;
    alert(y);
}
// question 2
function sendp() {
    let x = document.getElementById('phone');
    document.cookie = x.value;
}
function loadp() {
    let y = document.cookie;
    alert(y);
}
// question 3
var aee = [];
if (localStorage.getItem("arrayq3"))
    aee = JSON.parse(localStorage.getItem("arrayq3"));
let x = document.getElementById('fname');
let y = document.getElementById('pnum');
let z = document.getElementById('eemail');
document.getElementById('myBtn').addEventListener('click', function () {
    alert(30 > x.value.length && x.value.length > 2);
    if (30 > x.value.length && x.value.length > 2 && 30 > y.value.length && y.value.length > 2 && 30 > z.value.length && z.value.length > 2) {
        localStorage.setItem("name", x.value);
        localStorage.setItem("pnum", y.value);
        obj = {
            fname: x.value,
            pnum: y.value,
            email: z.value
        }
        aee.push(obj);
        localStorage.setItem("arrayq3", JSON.stringify(aee));
    }
    else alert("enter valid inputs");
});






// check email func 
function checkEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
        return true;
    else
        return false;
}