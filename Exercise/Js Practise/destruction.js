// Array Destruction
let nums = [10, 20, 30];
const [a, b, c] = nums;
console.log(a);
console.log(b);

// Object Destruction

const person = {
    name: "Prathish",
    age: 22,
    city: "Delhi"
}

const {name, age} = person;
console.log(name);
console.log(age);

const{name: userName} = person;
console.log(userName);

const {gender = "not specified"} = person;
console.log(person);


