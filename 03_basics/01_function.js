/*function addTwoNumbers( num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(3,4);*/

function addTwoNumbers( num1, num2){
    let result = num1+num2
    //return result
}
const result = addTwoNumbers(3,4);
//console.log("Result: ",result);

function loginUserMessage(username){
    if(username===undefined){
        //console.log("Please enter user name");
        //return
    }
    //return `${username} just logged in`
}

//console.log(loginUserMessage());

// Rest Function or Spread operation

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,600));

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,600,2000));

// Pass Object in a function

const user = {
    username : "Himanshu",
    price : 2000
}

function handleObject(anyObject){
    //console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

// Pass Array in a Function

const myNewArray = [200,400,600,800]

function returnValue(getArray){
    return getArray[1]
}

console.log(returnValue(myNewArray));