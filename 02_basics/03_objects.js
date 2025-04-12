// singleton
//object create

//object literals

const mySym = Symbol("key1");

const Jsuser = {
    name: "Vivek",
    "full name": "Vivek Prajapat",
    age: 23,
    [mySym]: "myKey1", // mySym (symbol Type) is used to craete a key in realation tomyKey1
    location: "Jaipur", // all Keys are as strings 
    email: "vivekprajapat@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]); // both this and above method are right to print values linked to that keys 
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]); // To print symbol type
console.log(typeof mySym); // output => Symbol 

console.log("----section 2--------------");
 
Jsuser.email = "vivekp@gmail.com";
// Object.freeze(Jsuser);
Jsuser.email = "vivekms@gmail.com"
console.log(Jsuser);

console.log("----section 3--------");

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting); // function is referenced but not printed
console.log(Jsuser.greeting()); // function executed and printed it contains

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // string interpolation uses name which is present in this program 
}

console.log(Jsuser.greetingTwo);
console.log(Jsuser.greetingTwo());