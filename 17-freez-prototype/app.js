// Reference: 
// https://www.youtube.com/watch?v=b-ysiVrbGJw&list=PLTo9PCskHpbGaCR6vjk1q4ohcEm8cBtzN&index=4
"use strict";

var prototypeObj = {
    greet() {
        console.log("Hi");
    }
}

var obj = Object.create(prototypeObj);
obj.greet();

// obj.greet = "Override"; this will cause problem since the obj.greet will not be a function anymore.
obj.greet();

// A good practice is to freeze the prototypeObj
var freezedPrototypeObj = Object.freeze(prototypeObj);
obj.greet = "Override";// this will not effect, or fail in strict mode
obj.greet();