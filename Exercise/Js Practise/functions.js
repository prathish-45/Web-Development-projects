// function declaration
function greet(){
    console.log("Hello, world!");
}
greet();

// function with parameters
function greetUser(name){
    console.log(`Hello, ${name}`);
}
greetUser("Prathish");

// Function with return type
function add(a, b){
    return a + b;
}
let result = add(5, 6);
console.log(result);

// Arrow functions
let multiply = (a, b) => {
    console.log("Hello");
    return a * b;
}

console.log(multiply(5, 6));

// One liner function
let square = x => x * x;
console.log(square(5));

// Function with default parameters
function defUser(name= "Uma") {
    console.log(`Hello, ${name}`);
}

defUser();
defUser("Prathish");




