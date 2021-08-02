// Reference: https://www.youtube.com/watch?v=vGZGvNgZJMo&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=3
var globalVar1 = "Var outside any function is a global variable.";
function aFunction() {
    this.globalVar2 = "Global object property is a global variable";
    globalVar3 = "Variable without declaring is a global variable";
    console.log(globalVar1);
    console.log(this.globalVar2);
    console.log(globalVar3);
}
aFunction();