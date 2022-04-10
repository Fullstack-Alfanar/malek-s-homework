

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
        if (y > 10) {
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
console.log(checkId('211863048'));