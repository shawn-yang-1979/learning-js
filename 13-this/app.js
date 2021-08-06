// Reference: https://www.youtube.com/watch?v=gvicrj31JOM
// this means the owner of the function
// When a function is owned by an object we call it method
var user = {
    firstName: "Shang-hua",
    lastName: "Yang",
    nickName: "Shawn",
    fullName() { // method, because it is a property of an object
        console.log(this);
        return this.firstName + " " + this.lastName; // this means the object who owns the function
    },
    aka: function () { // also method
        console.log(this);
        return this.fullName() + " (" + this.nickName + ")"; // this means the object who owns the function
    }
}

user.greet = function () { // also method
    console.log(this);
    return "Hi " + this.fullName();
}

console.log(user.fullName());
console.log(user.aka());
console.log(user.greet());

// The owner of the function can be both an object and the global object.
// The actual this object depends on how you use the function.
var rf = function regularFunction() { // function, we can't call it method yet, because it is not a property of an object
    console.log(this); // in a function, this means the global object, because the owner of the function is global object.
}
rf();

user.rf = rf; 
user.rf(); // now it becomes an method, what the fuck?

rf(); // now it becomes a function again, not a method, fucking weird.

function User(firstName) {
    this.firstName = firstName;
    console.log(this);
}

new User("Shawn"); // if you use new, this, will become and empty object
User("Shawn"); // if not using new, this will become the global object.

// The owner of a callback function is the global object by default.
var video1 = {
    tags: [1, 2, 3],
    showTags() {
        // this means the video2 object
        this.tags.forEach(
            function (v, i, r) {
                console.log(v);
                console.log(this); // this means the global object
            });
    }
}
video1.showTags(); // this in a callback function is also a gloabl object.

var video2 = {
    tags: [1, 2, 3],
    showTags() {
        // this means the video2 object
        this.tags.forEach(function (v) {
            console.log(v);
            console.log(this); // this means the video2 object because it is bind to the second param of the forEach method.
        }, this); // this means the video2 object
    }
}
video2.showTags(); // but if you pass the second param, it will be bind to the this in the callback function.