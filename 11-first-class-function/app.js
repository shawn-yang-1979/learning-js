// Reference: https://www.youtube.com/watch?v=1ieC6JZmF5w&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=13
var v1 = 1;
var f1 = function () {
    console.log("function is just like value.");
}
f1();
console.log("it can be assigned to a var");

var a1 = [v1, f1];
a1[1]();
console.log("it can be put in array");

var o1 = {
    ov1: v1,
    ov2: f1
}
o1.ov2();
console.log("it can be put in object");

console.log(1 + function () { return 2; }());
console.log("it can be run immediately");
console.log("() is just to exe a function");

var f2 = function (i, f) {
    return i + f();
}
console.log(f2(3, function () { return 4; }));
console.log("it can be used as param");

var f3 = function () {
    return 5;
}
var f4 = function () {
    return function () {
        return 6;
    }
}
console.log(f3() + f4()());
console.log("it can be a return value");