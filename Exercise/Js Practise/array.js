let fruits = ["Apple", "Banana", "Cherry", "Date"];
// Get elements by index
console.log(fruits[0]);
// Get elements length
console.log(fruits.length);
// add element to end of the array
fruits.push("Elderberry");
console.log(fruits);

// add element to start of the array
fruits.unshift("Fig");
console.log(fruits);

// remove last element
fruits.pop();
console.log(fruits);

// remove first element
fruits.shift();
console.log(fruits);

// remove element by index
fruits.splice(1, 1);
console.log(fruits);

// Index of value
console.log(fruits.indexOf("Cherry"));
// Check if value exists
console.log(fruits.includes("Banana"));

// Insert element at specific index
fruits.splice(1, 0, "Grapes");
console.log(fruits);

// Reverse the array
fruits.reverse();
console.log(fruits);

// Sort the array
fruits.sort();
console.log(fruits);

// Join elements into a string
let fruitString = fruits.join(", ");
console.log(fruitString);

// Split a string into an array
let newFruits = fruitString.split(", ");
console.log(newFruits);

// Function methods

// Map

let nums = [1, 2, 3, 4];
let square = nums.map(num => num * num);
console.log(square);

// Filter
let even = nums.filter(num => num % 2 === 0);
console.log(even);

// Reduce
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Find
let result = nums.find(num => num > 2);
console.log(result);