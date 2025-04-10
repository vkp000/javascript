//--1------------/////////////////////////
console.log("--operations 1--------------------------------")

    // basic comparisions we all know about outputs already
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//--2----------------------------//////////////////////////////
console.log("--operations 2--------------------------------")
    // while comparision javascript converts dataType itself , here it converted string to int 
console.log("2" > 1);
console.log("02" > 1);

//--3----------------------------//////////////////////////////
console.log("--operations 3--------------------------------")
   /* null is not equal to zero and is >= zero*/
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


//--4----------------------------//////////////////////////////
   /* undefined is undefined so it gives false on all comparisions */
console.log("--operations 4--------------------------------")

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//--4----------------------------//////////////////////////////
console.log("--operations 4--------------------------------")
    // === <-- this operation not only check values but also checks the dataTypes also
console.log("2" === 2);


