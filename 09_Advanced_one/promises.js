const promiseOne = new Promise((resolve, reject) => {
    //Do and async task 
    //DB calls, cryptography
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("promise consumed");

})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");

})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "example@mail.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);

})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);        
    }
}

consumePromiseFive()


//////////////////// next class

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     }  catch (error){
//         console.log("E:",error);
        
//     }  
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))