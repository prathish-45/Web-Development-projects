const fs = require("fs")

// fs.writeFile("message.txt", "Hello from Prathish", (err) => {
//     if (err) throw err;
//     console.log("The file saved successfully!");
// });

fs.readFile("message.txt","utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile("message1.txt", "Hello I created new file by my one", (err) => {
    if (err) throw err;
    console.log("The new file created successfully!");
});

// fs.writeFile("message.txt", "Hello from Prathish", (err) => {
//     if (err) throw err;
//     console.log("The file saved successfully!");
// });

fs.readFile("message.txt","utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile("message1.txt", "Hello I created new file by my one", (err) => {
    if (err) throw err;
    console.log("The new file created successfully!");
});