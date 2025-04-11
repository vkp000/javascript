const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "Value");  // to concatenate but it is not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this method is recommended

const gameName = new String('vivekpr')

console.log(gameName[0]);  // will print element linked to key value = 0
console.log(gameName.__proto__);

console.log(gameName.length);  // it will print the character linked to key value 0 (or the element at index 0)
console.log(gameName.toUpperCase()); // it will convert all the characters to upper case and then print the string
console.log(gameName.charAt(2)); // it will print the character linked to key value 2 (or the element at index 2)

console.log(gameName.indexOf('t'));

//--1-----------------------------------///////////////////////////
console.log("-----------------1------------------------------")

const gameName2 = new String('vivek-pr')

const newString = gameName2.substring(0,4) // here 0 and 4 both are indices for starting and end of the substring 
console.log(newString); //  output => a substring starting at index 0 and ending at index 4

const anotherString = gameName2.slice(4,4)
console.log(anotherString); //* output will be "" because starting index is length-4= (8-4) = 4 and end is 4   (slicecan take negative input and substract them from length,  and if provided is more than that of length it assume starting from 0 ) */

//--2-----------------------------------///////////////////////////
console.log("-----------------2------------------------------")

const newStringOne = "   vivek   "
console.log(newStringOne);
console.log(newStringOne.trim()); // this function remove space 

//--3-----------------------------------///////////////////////////
console.log("-----------------2------------------------------")

const url = "https://vivek.com/hitesh%20prajapat"

console.log(url.replace('%20', '-')); // this will replace %20 with -

console.log(url.includes('viv')); // this will print true or false if the provided string part is persent or not in the main string 

console.log(gameName2.split('-'));
