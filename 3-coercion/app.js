// Reference: https://www.youtube.com/watch?v=z4-8wMSPJyI&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=4
var i1 = 0;
if (!i1) {
    console.log(i1 + " converts to false");
}
var i2 = -0;
if (!i2) {
    console.log("-0 converts to false");
}
var s1 = "";
if (!s1) {
    console.log("empty string converts to false");
}
var i3 = "aaa"/3;
if (!i3) {
    console.log(i3 + " converts to false");
}
var nullVar = null;
if (!nullVar) {
    console.log(nullVar + " converts to false");
}
var undefinedVar;
if (!undefinedVar) {
    console.log(undefinedVar + " converts to false");
}
// a better way to check if a value is assigned
var i4;
if (typeof i4 === "undefined") {
    i4 = 1;
}
console.log(i4);