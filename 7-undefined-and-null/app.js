// Reference: https://www.youtube.com/watch?v=71eG2xEYO5E&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=8
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof "");

var v1;
console.log(v1); // no v1 value

var o1 = {};
console.log(o1.v1); // no v1 in o1

var f1 = function () {
    return;// no return value
}
console.log(f1());

var f2 = function (a){
    console.log(a);
}
f2();// no param