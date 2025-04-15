const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num+10) // returns values after performing specific task on them
console.log(newNums);


// const newNums2 = myNums.map((num) => num*10).map( (num) => num+1).filter((num) => num>=40) // its called chaining in this the output of one is passed to next and operation performed and passed to next again this way
const newNums2 = myNums // chaining can also be written like this 
                 .map((num) => num*10)
                 .map( (num) => num+1)
                 .filter((num) => num>=40)

console.log(newNums2);

