// Reference: https://www.youtube.com/watch?v=zYQ0ePou-no&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=6
var i = 1;
var s = "1";

if (i == s) {
    console.log(i + " and " + s + " are equal because == will do coercion");
} else {
    console.log(i + " and " + s + " are not equal");
}

if (i === s) {
    console.log(i + " and " + s + " are equal");
} else {
    console.log(i + " and " + s + " are not equal because === will not do coercion");
}