// Array

const nums = [10, 20, 30, 40, 50]
const [first, ...rest] = nums;
console.log(first);
console.log(rest);

// Function Parameters

function sum(...nums){
    return nums.reduce((a, b) => (a + b), 0);
}

console.log(sum(1, 2, 3));