const marvel_heros = ["thor", "Iraonman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);  //  pushesh dc_heros array as an element into the marvel heros array

console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros);  // concatanate marvel_heros and dc_heros and stores the combined into a third array that is allHeros
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // it also do the same function as concatanate but in this we  can concatanate mutiple means more than 2 in a single operation

console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6], 7, [6, 7, [4,5]]];
const real_another_array = another_array.flat(Infinity); // the function flat will convert the array into a flat array and we should provide in depth or infinity so the function  will check by itself  
console.log(real_another_array);


console.log(Array.isArray("Vivek"));
console.log(Array.from("Vivek"));
console.log(Array.from({name: "Vivek"})); // interesting if it dosen't understand what to do it will give null array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  // it create and print an array of score1,score2,score3 variables 
