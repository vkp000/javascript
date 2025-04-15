//for

for(let i=0; i<10; i++){  // initially value of the i is one and it chcks condition i<10 and then if true execute the code in curly braces and at the end increases i by 1
    if(i ===5) console.log("is 5");
    
    console.log(i);
    // scope of i is till curly braces 
}

for(let i=1; i<10; i++){ // this loop will run 10 times and inner loop 5 times means total 10*5 = 50 outputs
    console.log(`outer loop ${i}`);
    
    for(let j=1; j<5; j++){
        console.log(`inner loop ${j}`);
        // console.log(i + '*' + j + '=' + i*j);
  
    }
}


console.log("--sedction 2---------------");

let arr = ["flash", "batman", "superman"]
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//break and continue

for(let i =1; i<= 20; i++){
    console.log(i);
    if(i==5) break;  // when the value of i becomes equal to 5 this condition triggered and loop breaks    
}

for(let i =1; i<= 20; i++){
    
    if(i==5) continue;  // when the value of i becomes equal to 5 this condition triggered and skips printing 5 and continues    
    console.log(i);
}

