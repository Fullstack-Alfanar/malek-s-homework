// The Functions
/////////////////////////////////////////////////////////////////////////
// Email
function checkEmail(email) {
    let c = 0, dot = 0;
    for (var i = 0; i < email.length - 1; i++) {
        if (email[i] == '@')
            c++;
        if (c > 0 && email[i] == '.')
            dot = i;
    }
    if (dot < email.length && dot != 0) {
        return true;
    }
    return false;
}
// id
function checkId(id) {
    let c = 0, y = 0, sum = 0, p = 0;
    if (id.length != 9)
        return false;
    c = id;
    p = parseInt(c % 10, 10);
    c = c / 10;
    c = parseInt(c, 10);
    while (c != 0) {
        console.log(c);
        y = (c % 10 * 2);
        if (y >= 10) {
            y = (parseInt(y / 10) + y % 10);
            y = parseInt(y, 10);
        }
        sum += y;
        c = c / 10;
        c = parseInt(c, 10);
        sum += c % 10;
        sum = parseInt(sum, 10);
        c = c / 10;
        c = parseInt(c, 10);

        console.log(sum);
    }
    sum = parseInt(sum, 10);
    y = 10 - sum % 10;
    y = parseInt(y, 10);
    if (y == p)
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
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (var i = 0; i < name.length; i++) {
        let c = 0;
        for (var j = 0; j < arr.length; j++) {
            if (name[i] == arr[j])
                c++;
        }
        if (c == 0)
            return false;
    }
    if (name.length != 0)
        return true;
    else return false;
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