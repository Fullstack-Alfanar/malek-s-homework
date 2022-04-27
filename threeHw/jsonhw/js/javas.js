// question 1
var books = [{
    code: 10,
    fname: "book1",
    author: "malek",
    price: 20
}, {
    code: 11,
    fname: "book2",
    author: "malek",
    price: 25
}, {
    code: 12,
    fname: "book3",
    author: "malek",
    price: 25
}];
var jsonArr = (JSON.stringify(books));
alert(jsonArr);
var items = (JSON.parse(jsonArr));
console.log("original " + books + " items:" + items);
var s = "";
for (let i = 0; i < items.length; i++) {
    s += "Book Id " + items[i].code + "\n";
    s += "Book Name " + items[i].fname + "\n";
    s += "Book Author " + items[i].author + "\n";
    s += "Book Price " + items[i].price + "\n";
    s += "---------------------------" + "\n";
}
alert(s);

//  qustion 2
var cat = {
    name: "cat1",
    age: 5,
    color: "white",
    isSterile: false
}
var cat1 = (JSON.stringify(cat));
alert(cat1);
var yourCat = JSON.parse(cat1);
var s = "";
s += "name: " + yourCat.name + "\n";
s += "age: " + yourCat.age + "\n";
s += "color: " + yourCat.color + "\n";
s += "is your cat Sterile: " + yourCat.isSterile;

alert(s);