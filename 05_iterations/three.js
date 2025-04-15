// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr){
    console.log(num);    
}

const greetings = "Hello world"

for(const greet of greetings){
    console.log(`each char is ${greet}`);
    
}

console.log("--Maps-----------------------------");

// Maps

const map = new Map()
map.set('IN', "india")  // map stores only unique values if providedd once or twice no matter 
map.set('IN', "india") // In is key and values corresponding is india 
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for(const [key, value] of map){
    console.log(key,value);
    
}

const myObject = { // object are not iteratable using for of loop
    'game' : 'NFS',
    'game2': 'Spiderman'

}
