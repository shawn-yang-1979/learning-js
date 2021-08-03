// Reference: https://www.youtube.com/watch?v=a9nJeJV32oE&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=5
// function hoisting() declaration is moved to the top, so we can invoke it before the declaration.
hoisting1();
function hoisting1() {
    // var i is moved to the top of this function. So it can be used before the declaration.
    console.log(i);
    var i = 123;
    console.log(i);
}

// not work because only "var hoisting2" is moved to the top " = function () {" is not.
// hoisting2();

// hoisting2 is not a function yet, it's undefined.
console.log(typeof hoisting2);

var hoisting2 = function () {
    console.log("I am function expression.");
}

// works because the hoisting2 become a function now
hoisting2();

console.log(typeof hoisting2);