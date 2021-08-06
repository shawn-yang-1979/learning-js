// Reference: 
// https://www.youtube.com/watch?v=EatF4GfENiQ
// https://www.youtube.com/watch?v=iYCT1dY42d8
var obj = {};

console.log(obj.toString()); // the toString method inherit from prototype

obj.toString = function () {
    return "Hi!";
}

console.log(obj.toString()); // the toString method is override.

var prototypeObj = {
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

var user1 = Object.create(null);
user1.firstName = "Sean";
user1.lastName = "Chen";

var user2 = Object.create(prototypeObj);
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

// Other ways to link the prototypeObj
const Users = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Users.prototype = prototypeObj; // Users inherit prototypeObj
Users.prototype.constructor = Users;
var user4 = new Users("Shawn", "Yang");
console.log(Users);
console.log(user4);
console.log(user4.fullName());

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