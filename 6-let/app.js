// Reference: https://www.youtube.com/watch?v=9_10SWEW3-g&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=7
console.log(gv);
var gv = "var hoisting";
console.log(gv);

// console.log(gl);
let gl = "let not hoisting";
console.log(gl);

var func1 = function () {
    for (var fv = 0; fv < 10; fv++) {
        console.log(fv);
    }
    // this works because var fv is function scope variable and it can be accessed outside of the for block.
    console.log("outside the for block " + fv);
}
func1();

var func2 = function () {
    for (let fl = 0; fl < 10; fl++) {
        console.log(fl);
    }
    // this doesn't work because let fl is block scope variable and it cannot be accessed outside of the for block.
    // console.log("outside the for block " + fl);
}
func2();