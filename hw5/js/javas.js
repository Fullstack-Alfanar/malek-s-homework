var c = 0, sum = 0;
function test() {
    // Getting elemnts
    let Sname = document.getElementById("Sname");
    let Sgrade = document.getElementById("Sgrade");
    let tbdy = document.getElementById("Tbdy");
    let Cnav = document.getElementById("cards");
    let la1 = document.getElementById("la1");
    let la2 = document.getElementById("la2");

    // reating New Elments That We need
    let trr = document.createElement("tr");
    let tdd = document.createElement("td");
    let tdd1 = document.createElement("td");
    let Slabel = document.createElement("label");
    let Slabel1 = document.createElement("label");

    Slabel.textContent = Sname.value;
    Slabel1.textContent = Sgrade.value;


    if (!(isNaN(parseInt(Sgrade.value))) && checkName(Sname.value)) {
        sum += parseInt(Sgrade.value);
        c++;
        tdd.appendChild(Slabel);
        tdd1.appendChild(Slabel1);
        trr.appendChild(tdd);
        trr.appendChild(Slabel1);
        tbdy.appendChild(trr);
    }
    else alert("Grade Or Name is wrong");

    document.getElementById("la1").innerHTML = "Students Num\n" + c;
    document.getElementById("la2").innerHTML = "Average" + "\n" + (sum / c);
}





//Extra func to help
function checkName(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.match(letters))
        return true;
    return false;
}