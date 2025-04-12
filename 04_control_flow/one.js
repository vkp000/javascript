// if
const isUserLoggedIn = true
if(isUserLoggedIn){

}

if(2 == '2'){          /// checking but not data type
    console.log("executed");
}


if(2 === '2'){          /// checking even dataType so, else statement will be executed
    console.log("executed ")
} else{
    console.log("not equal");
}


// <, >, <=, >=, ==, !=, ===, 

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

console.log("---section 2-------------");

const balance = 1000
if(balance > 500 ) console.log("test passed") 

if(balance < 500){
    console.log("less than");

} else if(balance <750){
    console.log("less than 750");

}else if(balance < 900){
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard ){ // it will get executed only when both conditions 
    console.log("allowed to buy courses");   
}

if(loggedInFromEmail || loggedInFromGoogle){ // it will get executed only when any of the conditions get executed
    console.log("User logged in");
    
}