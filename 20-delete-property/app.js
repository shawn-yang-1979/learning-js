// Reference: https://www.youtube.com/watch?v=MBNXGBy_xjA
var person = {
    firstName: "Shawn",
    lastName: "Yang",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    greeting() {
        return "Hi! " + this.fullName();
    }
};
console.log(person);
delete person.firstName;
console.log(person);
delete person.greeting;
console.log(person);

// Don't use delete on array
var people = ["0","1","2"];
console.log(people.length);
delete people[0];
console.log(people.length);
console.log(people[0]); // you created a whole in the array object.
