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


// question 4
function save() {
    var aree = [];
    if (localStorage.getItem("savearr"))
        aree = JSON.parse(localStorage.getItem("savearr"));
    let x = document.getElementById('savein');
    console.log(aree);
    aree.push(x.value);
    localStorage.setItem("savearr", JSON.stringify(aree));
}

function search() {

    let c = -4;
    aree = JSON.parse(localStorage.getItem("savearr"));
    let x = document.getElementById('savein');
    for (let i = 0; i < aree.length; i++) {
        if (aree[i] == x.value)
            c = i;
    }
    if (c != -4)
        alert(aree[c]);
    else
        alert("not found");
}



// check email func 
function checkEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
        return true;
    else
        return false;
}