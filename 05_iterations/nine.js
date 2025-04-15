// reduce 

const myNums = [1, 2, 3]

const total = myNums.reduce(function (acc, curr_val) {     // reduce will accumulate or gives the sum of the all passed values and base value of accumulate value is initialised by user
    console.log(`acc: ${acc} and curr_val: ${curr_val}`);
    
    return acc + curr_val
}, 0)
console.log(total);

const myTotal = myNums.reduce((acc, curr_val) => acc+curr_val, 0)  // same as above just with arrow function

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "rb course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 2200
    }
]


const totalAmount = shoppingCart.reduce((acc,item) => item.price+acc,0)  // accessing values from objects and accumulating them
console.log(totalAmount);
