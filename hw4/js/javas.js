// The Functions
/////////////////////////////////////////////////////////////////////////
// Email
function checkEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
        return true;
    else
        return false;
}
// id
function checkId(id) {
    let c = 0, y = 0, sum = 0, p = 0;
    if (id.length != 9)
        return false;
    for (var i = 0; i < 8; i++) {
        if (i % 2 == 0)
            sum += parseInt(id[i], 10);
        else {
            y = id[i] * 2;
            if (y >= 10) {
                y = (parseInt(y / 10) + y % 10);
                y = parseInt(y, 10);
            }
            sum += y;
        }
    }
    y = 10 - (sum % 10);
    if (y == id % 10)
        return true;
    return false;
}
// age
function checkAge(age) {
    if (age == '')
        return false;
    if (age < 120)
        return true;
    else return false;
}
// name
function checkName(name) {
    if (name.length < 3)
        return false;
    var letters = /^[A-Za-z]+$/;
    if (name.match(letters))
        return true;
    return false;
}

// Main 
/////////////////////////////////////////////////////////////////////////
function check() {
    let s = "";
    let name = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let id = document.getElementById("idd").value;
    let email = document.getElementById("email").value;
    if (checkName(name) == false) {
        s += "Name Error";
    }
    if (checkAge(age) == false) {
        s += " Age Error ";
    }
    if (checkEmail(email) == false) {
        s += " Email Error ";
    }
    if (checkId(id) == false) {
        s += " ld Error ";
    }
    alert(s);
}
