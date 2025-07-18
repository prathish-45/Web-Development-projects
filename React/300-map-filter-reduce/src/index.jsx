var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
console.log(numbers.map((x) => x));

//Filter - Create a new array by keeping the items that return true.

console.log(numbers.filter((num) => num > 10));

//Reduce - Accumulate a value by doing something to each item in an array.
console.log(numbers.reduce((acc, curVal) => acc + curVal, 0));

//Find - find the first item that matches from an array.

// console.log(numbers.find((x) => x > 10));


//FindIndex - find the index of the first item that matches.

// console.log(numbers.findIndex((x) => x > 10));


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
