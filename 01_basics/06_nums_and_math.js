const score  = 400

const balance = new Number(100)
console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1123.8986

console.log(otherNumber.toPrecision(4));

//--2-----------------------------------///////////////////////////
console.log("-----------------2------------------------------")

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//--Math-----------------------------------///////////////////////////
console.log("-----------------Math-----------------------------")


console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,3,4,5,6,7,8,9));
console.log(Math.max(2,3,4,5,6,7,8,9));

//--random-----------------------------------///////////////////////////
console.log("-----------------random------------------------------")

console.log(Math.random());  // print a random value between o and 1 
console.log((Math.random()*10) +1); // to print a value between 1 to 9 and avoid the case of 0
console.log(Math.floor(Math.random()*10) +1); // floor will print next nearest integer value 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it will print a value between the range min and max



