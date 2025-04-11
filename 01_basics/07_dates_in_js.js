// dates 

let myDate = new Date ()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(typeof myDate);

//--2-----------------------------------///////////////////////////
console.log("-----------------2------------------------------")

let myCreatedDate = new Date(2023, 0, 23); // 2023, 0, 23 => year month day, jan=0 and so on..
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDateOne.toLocaleString());

let myCreatedDateTwo = new Date("01-12-2024");
console.log(myCreatedDateTwo);

//--3----------------------------------///////////////////////////
console.log("-----------------3-----------------------------")

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

//--4----------------------------------///////////////////////////
console.log("-----------------4------------------------------")

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getSeconds());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long"
})
