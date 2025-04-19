const user = {
    userName : "vivek",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.userName}`)
        // console.log(this);
        
    }
}

console.log(user.userName);
// console.log(user.getUserDetails());

console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // return this  // implicitly defined hota hai to likho ya na likho chalta hai but suggested ki likho
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);


console.log(userOne.constructor);
 
// console.log(userTwo);
