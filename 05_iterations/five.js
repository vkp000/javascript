const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(val) { // forEach loop passing value from array to the expressed function
    console.log(val);
    
})

coding.forEach((val) => {  // its an arrow function in whish you don't need to declare a function, it itself taakes value as input and do operation 
    console.log(val);
    
})

function printme(val) {
    console.log(val);
    
}
coding.forEach(printme)  // printme function is called here for each value from array

console.log("--section  2-----------------------------");



coding.forEach((val, index, arr) => {  // forEach function not only takes value but also index and array
    console.log(val, index, arr);
})

console.log("--section 3---------------------------------");

const myCoding = [     // array of objects 
    {
    languageName: "javascript",
    languageFileName: "js",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "ruby",
        languageFileName: "rb",
    }
]

myCoding.forEach((item) => { // here it is going forEach object that is an element of array and then languageName inside that array
    console.log(item.languageName);
    
})