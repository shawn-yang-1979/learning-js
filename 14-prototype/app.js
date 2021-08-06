// Reference: 
// https://www.youtube.com/watch?v=EatF4GfENiQ
// https://www.youtube.com/watch?v=XNjLhxg4u6k
// https://www.youtube.com/watch?v=iYCT1dY42d8

var emptyObj = {};
console.log(emptyObj.toString()); // the toString method is from prototype Object
emptyObj.toString = function () {
    return "Hi!";
}
console.log(emptyObj.toString()); // the toString method is override.

var prototypeObj = {
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

// 1st way to create object with specific prototype
var user1 = Object.create(null); // specify null prototype
user1.firstName = "Sean";
user1.lastName = "Chen";

var user2 = Object.create(prototypeObj); // specify prototypeObj as the prototype of the user2
user2.firstName = "Shawn";
user2.lastName = "Yang";

var user3 = Object.create(prototypeObj);
user3.firstName = "Shawn";
user3.lastName = "Li";

// console.log(user1.toString()); // will fail, because the user1 doesn't have any prototype.
console.log(user2.toString()); // user2 -> prototypeObj -> object and the toString method is found.
console.log(user3.toString());

// console.log(user1.fullName());// will fail, because the user1 doesn't have any prototype.
console.log(user2.fullName()); // user2 -> prototypeObj and the fullName method is found.
console.log(user3.fullName());

// 2nd way to create object with specific prototype
const User = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
User.prototype = prototypeObj; // assign the prototypeObj to the prototype property of the Users function.
var user4 = new User("Shawn", "Yang");
console.log(User);
console.log(user4);
console.log(user4.fullName());

// 3rd way to create object with specific protytype
var person = {
    firstName: "Shawn",
    lastName: "Yang"
};
console.log(person);
Object.setPrototypeOf(person, prototypeObj);
console.log(person);
console.log(person.fullName());

// class is just a prototype object
class UserClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

var user5 = new UserClass("Shawn", "Yang");
console.log(user5.fullName());