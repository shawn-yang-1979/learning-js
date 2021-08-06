// Reference:
// https://www.youtube.com/watch?v=OHmx17XmeAs

function User() {
    console.log(this);
}

var user1 = User();
// The new keyword will:
// 1. Create a new empty object.
// 2. Bind the this keyword of the function to the empty object 
// 3. Assign the prototype of the function to the new empty object.
// 4. Return the new object.
var user2 = new User();

User.prototype.greeting = function () {
    console.log("Hi");
}

// the User.prototype object is equal to the user2.prototype object, see #3
user2.greeting();