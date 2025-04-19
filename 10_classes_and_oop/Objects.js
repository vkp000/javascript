function multipleBy5(num){
    this.num = num
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);



function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increrament = function(){
    this.score++    // this is used to indicate to function to give output about current reference whatever called 
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`); // this is used to indicate current reference . jisne puchha uska bata do 
    
}
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()