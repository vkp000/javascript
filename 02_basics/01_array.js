// array 

const myArr = [0,1,2,7,8,9]
const myHero = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6);
myArr.push(11); // add element at the end of the array
myArr.pop(); // removes element from end of the array

console.log("----section 2--------------------");

myArr.unshift(0); // inserts element in begining means shifts all element by one O(n)
myArr.shift(); // removes begining means shift towards left by one  
console.log(myArr);

console.log("----section 3-------------");

console.log(myArr.includes(9)); // return true or false if 9 is in the array or not 
console.log(myArr.indexOf(9)); // gives index of the element 9

console.log(myArr);
const newArr = myArr.join(); // binds array and convert into a tring 

console.log(typeof newArr); // output => string data type 
console.log(newArr);  // output as a string 

console.log("----section 4-------------");
//slice, splice

console.log("A ", myArr);
const myn1  = myArr.slice(1,3); //  slice of array from 1 to 3rd not included
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // it creeates a myn2 of elements from 1 to 3rd not included , and also removes them from original array
console.log("C ", myArr);
console.log(myn2);