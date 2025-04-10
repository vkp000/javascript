// primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3
//  number number hai, koi specific nahi ki int hai ya float hai

const isLoggedIn = false
const outsideTemp = null
let userEmail; // value = undefined 

/*below both different value because symbol gives them a uniqueness */
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // output  => false 

const bigNumber = 2676725675656325672654n
console.log(typeof bigNumber) // output => bigint



// Reference (Non primitive )

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp); // output => object because outsideTemp = null & null is a object dataType
console.log(typeof scorevalue); // output => Number 
console.log(typeof myFunction); // output => Function but generally it is called as Function object
console.log(typeof heros); // output => object
console.log(typeof anotherId); // output => symbol
