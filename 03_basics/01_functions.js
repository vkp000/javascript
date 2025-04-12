function SayMyName(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");
}

function addTwoNumbers(Num1, Num2){ // no need to define dataType of the input arguments 
    return (Num1+Num2)
}

const result = addTwoNumbers(3,4) //  function will return sum of the numbers and is saved in the result variable

console.log(result)

function loginUserMessage(username){
// function loginUserMessage(username = "vikssa"){   //if no value is provided then it will take default as value that is viksaa here 
    if(!username) {   // if username value is not available then this condition passed and code inside if is executed
        console.log("no value") 
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // function will return a string and is printed 




console.log("---section 2 -----------")




function calculateCarPrice(val1, val2 , ...num1){ // ... is called as rest or spread operator based on its use case, here is values provided eg. 2,3,4,5,5, then first two will go to val1 and val2 rest will go as array into num1

    return num1
}

console.log(calculateCarPrice(2,400,2,2)); 


const user = { // created an object whose name is user
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){  // input or parameter passed is as object
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ // this function will return second value of array that is at 1 index (0-based indexing)
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


