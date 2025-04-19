let myName = "Vivek    "

console.log(myName.trueLength);  // trueLength(nethod) is not in built 


let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammerr",
    spiderman: "sling",

    getSpiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
    
}

// heroPower.hitesh()

myHero.hitesh()
myHero.heyHitesh()
// heroPower.heyHitesh()





// inheritence 



const User = {
    name:"chai",
    email:"chaibiscuit.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
    
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()