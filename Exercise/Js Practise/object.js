// C
let person = {
    name: "Prathish",
    age: 22,
    isStudent: true
}

console.log(person.name);
console.log(person["age"]);
console.log(person.isStudent);

// Add elements to the object
person.city = "Namakkal";
console.log(person);

// Delete elements from the object
delete person.isStudent;
console.log(person);

// Object with methods
let user = {
    name: "Prathish",
    greet: function() {
        console.log("Hello, " + this.name);
    }
}

user.greet(); // Output: Hello, Prathish

// Object with nested objects
let students = {
    name: "Amma",
    subjects: {
        maths: 90,
        science: 85
    }
}
console.log(students.subjects.science);

