/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import * as fs from 'fs';
import inquirer from 'inquirer';
import qrimage from 'qr-image';

inquirer
    .prompt([
        {
            name: 'userInput',
            message: 'Enter your input: '
        }
    ])
    .then((answer) => {
        fs.writeFile("message.txt", answer.userInput, (err) => {
            if(err) throw err;
            console.log("File written successfully");
        })
        var qr_png = qrimage.image(answer.userInput);
        qr_png.pipe(fs.createWriteStream('qr-code.png'));
    })