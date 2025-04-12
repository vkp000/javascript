const user = {
    username: "vivek",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this reffers current context
        console.log(this);
        
    }
}


 
user.welcomeMessage()

console.log("--section 2--------------");
user.username = "sam"
user.welcomeMessage() // it printed output after modifying username = "sam" 

console.log(this); // it printed {}
// global object in the browser is window and in the node enviornment its null or blank

console.log("--section 3--------------");

function chai(){
    let username = "vivek"
    console.log(this);
}

chai()


console.log("---section 4--------------------");

const chai1 = () => {
    let username = "vivek"
    console.log(this);
    
}

chai1()

const addOne = (num1, num2) => { // basic arrow function
    return num1+num2  // it's called explicit return 
}

console.log(addOne(3, 4));

const addTwo = (num1, num2) => (num1+num2) // no need to write return as it itself returns the output, it's called implicit return no need to write return 
// to return an object wrap it in currlly braces and then wrap into parentheses

console.log(addTwo(3, 4));