// Reference: https://www.youtube.com/watch?v=3sGFoypr8kA
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
    greeting() {
        return "Hi! " + this.fullName();
    }
}
let person = new Person("Shawn", "Yang");
// when using class, enumerable attribute of method is false, so for in can't print out the method.
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(person), "fullName"));
// Only firstName and lastName will be in the loop
for (let key in person) {
    console.log(key + "->" + person[key]);
}

var prototypeObj = {
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
var user = Object.create(prototypeObj); // specify prototypeObj as the prototype of the user2
user.firstName = "Shawn";
user.lastName = "Yang";
user.nickName = function () {
    return "Shang Hua " + this.lastName;
}
// when using Object create, enumerable attribute of method is true, so for in can print out the method.
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(user), "fullName"));
console.log(Object.getOwnPropertyDescriptor(user, "nickName"));
for (let key in user) {
    console.log(key + "->" + user[key]);
}
for (let key in user) {
    // the way to skip prototype's properties
    if (!user.hasOwnProperty(key)) {
        continue;
    }
    console.log(key + "->" + user[key]);
}
for (let key in user) {
    // the way to skip functions
    if (typeof user[key] === "function") {
        continue;
    }
    console.log(key + "->" + user[key]);
}