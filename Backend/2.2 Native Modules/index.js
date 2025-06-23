import * as fs from 'fs';

fs.writeFile("message.txt", "Hello, World!\nJavascript is the easiest language", (err) => {
    if(err) throw err;
    console.log("File written successfully!");
});

fs.readFile("message.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
});
