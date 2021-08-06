// Reference:
// https://www.youtube.com/watch?v=w6Bw5zKcpKY&list=PLTo9PCskHpbFc08fi-4TNIZ8qG0pO3Ph7&index=2

function User(username) {
    this.username = username;
}

var user1 = User("shawn.yang"); // forgot to add new keyword.
console.log(username); // pollute the global object. 

function Person(firstName) {
    if (this instanceof Person) {
        this.firstName = firstName;
    } else {
        throw "Use new keyword";
    }
}

var person1 = new Person("Shawn");
var person2 = Person("Shawn"); // will fail