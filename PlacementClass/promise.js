// Promise in variables

// let my_promise = new Promise((resolve, reject) => {
//     let mark = 40;
//     if(mark >= 50) resolve("Success");
//     else reject("Failed");
// })

// my_promise.then((msg) => console.log(msg))
// .catch((err) => console.log(err));
// let mark;

// function dataLoad(mark) {
//     return new Promise((resolve, reject) => {
//     // let mark = 40;
//     if(mark >= 50) resolve("Success");
//     else reject("Failed");
// })
// }

// dataLoad().then((msg) => console.log(msg))
// .catch((err) => console.log(err));

// let mark;

// let dataLoad = (mark) => {
//      return new Promise((resolve, reject) => {
//     // let mark = 40;
//     if(mark >= 50) resolve("Success");
//     else reject("Failed");
// })
// }

// dataLoad(20).then((msg) => console.log(msg))
// .catch((err) => console.log(err));

let dataLoad = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Failed");
            
        }, 3000)
    })
}

dataLoad().then((msg) => console.log(msg)).catch((err) => console.log(err));

