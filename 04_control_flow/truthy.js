const userEmail = "vivek@gmail.com"

if(userEmail){
    console.log("Got the user email");
}else{
    console.log("Don't have user email");
}

// falsy values  ==> false, 0, -0, BigInt 0n, "" , null, undefined, NaN
// Truthy values ==> "0"(because string is not empty), 'false' (because it is a non empty string) , " " (because it is a non empty string), [], {}, function(){} 

const myArr = []

if(myArr.length === 0){
    console.log("Arr is empty");    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("its also empty");
}


// Nullish coalescing Operator (??): null undefined 
console.log("----section 2-----------------");

let val1;
val1 = null ?? 10 // like if this variable used anywhere else this operator ensure that code structure dont get disturbed  and assign one of these available values

val2 = null ?? 10 ?? 20



console.log(val2);
console.log(val1);

// ternary operator

// condition ? true : false in this condition is checked and if true than statement at theplace of true is executed and if false than statement at false is executed

const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80");
