// Reference: 
// https://www.youtube.com/watch?v=abP2q8eEXWg&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=16
var obj1 = new Object();
var arr1 = new Array();
var fun1 = new Function("console.log('Hi')");
fun1();

var obj3 = Object.create(null);

// most common way to create object
var obj2 = {};
console.log(typeof obj2);
var arr2 = [];
console.log(typeof arr2);
var fun2 = function () {
    console.log("Hi");
}
console.log(typeof fun2); // but actually function is also an object.
fun2();

// add property to object, array or function
obj2.p1 = "p1";
console.log(obj2.p1);
arr2.p1 = "p1";
console.log(arr2.p1);
fun2.p1 = "p1";
console.log(fun2.p1);

var obj = {
    firstName: "Shawn",
    lastName: "Yang",
    levels: [1, 2, 3],
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    startDate: new Date()
}
console.log(obj.firstName);
console.log(obj["firstName"]);
console.log(obj.levels[0]);
console.log(obj["levels"][0]);
console.log(obj.fullName());
console.log(obj["fullName"]());
console.log(obj.startDate);

obj.firstName = "Shang-hua";
console.log(obj["firstName"]);

obj["firstName"] = "Shawn";
console.log(obj.firstName);

obj.fullName = function () {
    return "Override";
};
console.log(obj.fullName());
