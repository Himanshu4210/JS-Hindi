// Primitive dataTypes

// 7 types : String , Number , Boolean , Null, Undefined, Symbol, BigInt


// Reference type or Non Primitive 

// Arrays , Object, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const OutTemperature = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const arrays = ["S", "H", "I"];

let obj1 = {
    name:  "HS",
    age: 22,
}

const myFun = function(){
    //console.log("Hello");
}

let myName = "Himanshu"
let anotherName = "Abhishek"
console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    Upi : "@ybl"
}

let userTwo = userOne

userTwo.email = "himanshu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





