const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("febuary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("Arpil")
        break;

    default:
        console.log("Default case month")
        break;
}

/// Truthy and falsy Value

// falsy Value
// false , 0, -0 , BigInt 0n, "", null, undefined, NAN

// Truthy Value
// "0",'false'," ",[],{}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5??10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary Operator
// condition true ? false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less tha 80") : console.log("More than 80")