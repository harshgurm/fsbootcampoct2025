const path = require('path');
const os = require('os');
const fs = require('fs');
const server = require('./server');

console.log('Name from server.js: ', server.name);

let filename = path.parse(__filename); // returns '.txt'
// console.log(filename)

// console.log(os.totalmem()); // returns the operating system name
// console.log(os.machine()); // returns the home directory of the current user    
// console.log(os.freemem()); // returns the home directory of the current user    

// C:\Robogarden\fsbootcampoct2025\web-dev-basic\bootstrap.html

// console.log(fs);


// fs.readFile('./bootstrap.html', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// const pro = new Promise((resolve, reject) => {
//     console.log('Coming here 1');
//     setTimeout(() => {
//         console.log('Coming here 2');
//         if(success){
//             resolve('Operation Successful');
//             return;
//         } else {    
//         reject('An error occurred');
//         }
//     }, 4000);
// });

// console.log('Coming here 3');
// pro.then((message) => {
//     console.log('Coming here 4');
//     console.log(message);
// }).catch((err) => {
//     console.log('Error here');
//     console.log(err);
// });
// console.log('Coming here 5');

new Promise((resolve, reject) => {
    reject({    code: 500, message: 'Internal Server Error'});
    resolve({ name: 'John', age: 30 });
}).then((message) => {
    console.log('Message: ', message);
    //
}).catch((err) => {
    console.log('Error: ', err);
    //add the code to display error popup
});