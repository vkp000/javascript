//----1---------////////////////////////////
console.log("--1--------------------------------")
let score = "33aaa"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//--2--------////////////////////////////
console.log("--2--------------------------------")

let score1 = null

console.log(typeof score1)
console.log(typeof(score1))

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)


//--3----------//////////////////////////////////
console.log("--3--------------------------------")

let score2 = undefined

console.log(typeof score2)
console.log(typeof(score2))

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)


//--4------------//////////////////////////////////
console.log("--4--------------------------------")

let score3 = true

console.log(typeof score3)
console.log(typeof(score3))

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

//--5-------------/////////////////////////////////
console.log("--5--------------------------------")

let score4 = "vivek"

console.log(typeof score4)  
console.log(typeof(score4))

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)


// "33" => 33
// "33aa" => NaN (Not a Number)
// true => 1; false => 0
//--6----////////////////////////////////////////////
console.log("--6--------------------------------")

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "vivek" => true

//--7--------///////////////////////////////
console.log("--7--------------------------------")

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber);



/////////////****** Operations *******///////////////
console.log("--operations 1--------------------------------")
let value = 3
let negValue = -value
console.log(negValue)

///-----2-------///////////////////////////
console.log("--operations 2--------------------------------")

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

//--3-----////////////////////////////////////
console.log("--operations 3--------------------------------")
let str1 = "hello"
let str2 = " vivek"

let str3 = str1 + str2

console.log(str3);
console.log("1" + 2);
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
//--4----------------------////////////////////
console.log("--operations 4--------------------------------")

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2
//--5-----------------------////////////////////////
console.log("--operations 5--------------------------------")

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
