const user = {
    username : "name",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the webpage`)
        //console.log(this);
    }
}

//user.welcomeMessage();
//user.username = "sam"
//user.welcomeMessage()

//console.log(this); // This is outside function and in global scope there is no variable.
// and this keyword only refer current object/owner of function


function one(){
    //console.log(this);
}
one()

function Two(){
    username : "Hitesh"
    //console.log(this.username);
}

Two()

/*const var1 = function(){
    let username = "Hitesh"
    console.log(this.username);
}

var1()*/

// Arrow Function

const var1 = () =>{
    let username = "Hitesh"
    //console.log(this.username);
   // console.log(this)
}

var1()

/*const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));*/

// Implicity return 

// const addTwo = (num1,num2) => num1+num2 
//const addTwo = (num1,num2) => (num1+num2)

// Object return 
const addTwo = (num1,num2) => ({username:"Hitesh"})

console.log(addTwo(3,4));

