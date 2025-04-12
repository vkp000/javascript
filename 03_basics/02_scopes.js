var c= 400

if (true) {
    let a = 10     //its scope is throughout the {} block
    const b = 20   //its scope is throughout the {} block
    var c = 30     //its scope is throughout the program and can be manipulated at anywhere
}


// console.log(a);
// console.log(b);
console.log(c);


// for (let i = 0; i < array.length; i++) { // scope of element and i is throughout the for loop only
//     const element = array[i];
// }


 console.log("---section: function one ----------------");
 
function one(){
    const username = "vivek"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // this statement will give error because scope of website varible is till two() function only

    two()
}

one()


if(true){
    const username = "vivek"
    if(username){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);  // it will give error because the scope of website  is till inner loop only 
}

// console.log(username); // it will also give an error because scope of the username isinside the if statement only

console.log("---interesting concept----------------");


function addone(num){
    return num + 1;
}

console.log(addone(5));

const addTwo = function(num){  // it is callet a variable or an expression because varibles in js can hold function also
    return num +2
}

addTwo(5)