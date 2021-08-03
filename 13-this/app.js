// Reference: https://www.youtube.com/watch?v=gvicrj31JOM
var user = {
    firstName: "Shang-hua",
    lastName: "Yang",
    nickName: "Shawn",
    fullName() { // method, not function, because it is a property of an object
        console.log(this);
        return this.firstName + " " + this.lastName; // this means the object when in method
    },
    aka: function () { // also method
        console.log(this);
        return this.fullName() + " (" + this.nickName + ")"; // this means the object when in method
    }
}

user.greet = function () { // also method
    console.log(this);
    return "Hi " + this.fullName();
}

console.log(user.fullName());
console.log(user.aka());
console.log(user.greet());

var rf = function regularFunction() { // function, not method, because it is not a property of an object
    console.log(this); // in a function, this means the global object.
}
rf();

user.rf = rf; // now it becomes an method, not function, what the fuck.
user.rf();

rf(); // now it becomes a function again, not a method, fucking weird.

function User(firstName) {
    this.firstName = firstName;
    console.log(this);
}

new User("Shawn"); // if you use new, this, will become and empty object
User("Shawn"); // if not using new, this will become the global object.

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