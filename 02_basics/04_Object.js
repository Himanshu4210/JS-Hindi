// Singleton Object
//const User = new Object();

const User = {}

User.id = "123abc"
User.name = "Sammy"
User.isLoggedIn = false

//console.log(User);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Raj"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

// Most usable method to merage object using spreadout.
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

// Array Objects 

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
     {
        id : 2,
        email : "hi@gmail.com"
    },
     {
        id : 3,
        email : "him@gmail.com"
    }
]

users[1].email
console.log(User);
console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));

console.log(User.hasOwnProperty('isLoggedIn'));

