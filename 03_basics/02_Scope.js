// var = 300

let a=300
// This curly braces is our scopes in js
if(true){
    let a = 10
    const b =20
    //console.log("INNER", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope

function one(){
    const username = "Himanshu"
    function two(){
        const website = "Him@gmail.com"
        //console.log(username);
    }
    //console.log(website); // Error due to out of scope 

    //two();

}
one();

if(true){
    const username = "Himanshu"
    if(username==="Himanshu"){
        const website= " Youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
// console.log(username);

// ++++++++++++ Intersting ++++++++++++++

// Function

addOne(5)

function addOne(num){
    return num+1
}

// addOne(5)

// Function Expression
addTwo(5) // When we call the function by first access because it already stored in variable that why give error it called method Hositing


const addTwo = function(num){
    return num+2
}
//addTwo(5)