// Reference: https://www.youtube.com/watch?v=HvBg2I2pfhQ&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=11
// these are false
console.log(false ? true: false);
console.log(null ? true: false);
console.log(undefined ? true: false);
console.log(0 ? true: false);
console.log(-0 ? true: false);
console.log(NaN ? true: false);
console.log("" ? true: false);

// these are true
console.log({} ? true: false); // empty object
console.log([] ? true: false); // empty array
console.log(-5 ? true: false); // nagative number