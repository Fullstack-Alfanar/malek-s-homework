// question 1
let arr3 = [1, 2, 3, 4];
let arr1 = [3, 4, 5, 9];
let arr2 = [1, 2, 3, 4, 22, 55];

function malek1(arr) {
    var c = 0;
    for (let counter of arr) {
        c += counter;
    }
    return (c / arr.length);
}
console.log(malek1(arr1));
console.log(malek1(arr3));
console.log(malek1(arr2));

// question 2
function malek2(arr) {
    var c = 0, counter = arr[0];
    for (let counter of arr) {
        if (c < counter)
            c = counter;
    }
    return (c);
}
console.log(malek2(arr1));
console.log(malek2(arr3));
console.log(malek2(arr2));

// question 3
let txtarr1 = ["sa", "Sad", "Asdada"];
let txtarr2 = ["saasd", "Sad", "Asdada"];
let txtarr3 = ["sadd", "Sswad", "Asdaaaada"];
function malek3(arr) {
    let s = "", c = 0;
    for (let counter of arr) {
        if (s.length > counter.length)
            c = counter;
    }
    return (c.length);
}
console.log(malek3(txtarr1));
console.log(malek3(txtarr3));
console.log(malek3(txtarr2));

// question 4
function malek4(arr) {
    let s = "", c = 0;;
    for (let counter of arr) {
        if (s.length < counter.length)
            c = counter;
    }
    return (c);
}
console.log(malek4(txtarr1));
console.log(malek4(txtarr3));
console.log(malek4(txtarr2));

// quesion 5
function malek5(arr) {
    let c = 0, sum = 0;
    c = malek1(arr);
    for (let counter of arr) {
        if (counter >= c)
            sum++;
    }
    return sum;
}
console.log(malek2(arr1));
console.log(malek2(arr3));
console.log(malek2(arr2));

// question 6 
function malek6(num) {
    c = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i == 0)
            c++;
    }
    if (c > 2)
        return true;
    return false;
}
alert(malek6(12));
alert(malek6(21));

// question 7
function malek7(arr) {
    for (let counter of arr) {
        var c = 0;
        for (var i = 0; i <= counter; i++) {
            if (counter % i == 0)
                c++;
        }
        if (c > 2)
            return false;
    }
    return true;
}
alert(malek7(arr1));
alert(malek7(arr2));