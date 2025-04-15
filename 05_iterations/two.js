let index = 0
while(index <= 10){
    console.log(`index is ${index}`);
    index = index+2;
}

let myArray = ['flash', 'ironman', 'spiderman']

let arr=0;
while(arr< myArray.length){   // loop runs till the condition here is satisfied if it fails then loop stops 
    console.log(`value is ${myArray[arr]}`);
    arr++;
}

let score = 1
do{    // 1st loop always runs no matter condition down in while satisfies or not , after 1st iteration it start checking the condition
    console.log(score);
    score++;
    
}while(score<=10)