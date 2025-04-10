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

