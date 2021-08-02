// Reference: https://www.youtube.com/watch?v=luq6aflInTQ&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=10
"use strict";// global scope
// gv1 = 1; not allowed in strict mode
var f1 = function () {
    "use strict";// function scope
    // fv1 = 1; not allowed in strict mode
}
f1();

// var f2 = function (i1, i1) { // not allowed in strict mode
// }
// f2(100, 200);

var obj1 = {};
obj1.i1 = 1;
Object.defineProperty(obj1, "i1", { writable: false }); // make it readOnly

// obj1.i1 = 2; not allowed in strict mode