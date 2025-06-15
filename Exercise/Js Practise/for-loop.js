
// Assignment 2
for(var i = 0; i < 10; i++) {  
    console.log(i);
}
console.log("Loop finished!");

for(var i = 1; i < 10; i += 2) {  
    console.log(i);
}


var colors = ["red", "green", "blue", "yellow"];
for(var color of colors) {
    console.log(color);
}

var person = {
    name: "John",
    age: 30,
    city: "New York"
};
for(var key in person) {
    console.log(key + "= " + person[key]);
}
for(var key in person) {
    console.log(`${key} = ${person[key]}`);
}
