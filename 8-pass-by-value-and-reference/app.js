// Reference: https://www.youtube.com/watch?v=xdJO5u0V7ew&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=9
var i1 = 1;
var i2 = i1;
i1 = 2;

console.log(i1);
console.log(i2);

var o1 = {};
var o2 = o1;
o1.i = 1;

console.log(o1.i);
console.log(o2.i);

var f1 = function () {
}
var f2 = f1;
f1.i = 1;
console.log(f1.i);
console.log(f2.i);