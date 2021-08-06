// Reference: https://www.youtube.com/watch?v=iLu_BS0agOY
// class is just using prototype behind the scenes.
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
console.log(person.greeting());

class Employee extends Person {
    constructor(firstName, lastName, level) {
        super(firstName, lastName);
        this.level = level;
    }
    greeting() {
        return super.greeting() + ". " + this.level;
    }
}

let employee = new Employee("Shawn", "Yang", 3);
console.log(employee.greeting());