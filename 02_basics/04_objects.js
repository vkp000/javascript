// const tinderUser = new object() // singleton object
const tinderUser = {} //  non singleton object, both will print same output

tinderUser.id = "123abc"
tinderUser.name = "veki"
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname:{
            firstname: "vivek",
            lastname: "prajapat"
        }
    }
}

console.log(regularUser.fullName.userFullname); //it will print the values or objects that are in the userFullName object
console.log(regularUser.fullName.userFullname.firstname); // it will print the value related to key firstName
console.log(regularUser.fullName?.userFullname.firstname); //  in this ? mark suggest that it first confirm the existence of fullName

console.log("---section 2 -----------")

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2 }; // it will concatenate obj1 and obj2 as { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3);

const obj4  = Object.assign({},obj1, obj2);
console.log(obj4); // it will combine both objects entries 

const obj5 = {...obj1, ...obj2} // spread operator all objects get flattened , above one and it do same 
console.log(obj5);

console.log("--section 3------------");

const users = [{
    id: 1,
    email: "vkp@gmail.com"
},
{
    id: 1,
    email: "vkp@gmail.com"
},
{
    id: 1,
    email: "vkp@gmail.com"
},
{
    id: 1,
    email: "vkp@gmail.com"
},
]

users[1].email  // access particular object and its inner element values by key
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // it will print all keys 
console.log(Object.values(tinderUser)); // it will print all values corresponding to its all keys 
console.log(Object.entries(tinderUser)); // it will print all keys and values correspondin to the keys 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it print true false if the isLoggedIn property exists or not


console.log("---section 4-------------");

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Vivek"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // de structuring object and courseInstructor as => Instructor

console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]