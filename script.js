
let test = 2;
const baseString = `the incrementing numbers value is at ${test}`;
console.log(baseString);
console.log("aaaaaa");
test+=3;
console.log(baseString);

let currentURL = `https://xkcd.com/info.0.json `;
let firstURL = `https://xkcd.com/1/info.0.json`;
let iteration = 1;
let iterativeURL = `https://xkcd.com/${iteration}/info.0.json`;

//get the num of the current comic and store it so that way our iteration can never grow greater than that 

//set up several fetch requests

//

fetch(baseURL)
.then(res => {
    return res.json
})
.then(response => {
    //code goes here
    console.log('were getting here');
})
.catch(err => {
    //will throw an error for us if something goes wrong
})