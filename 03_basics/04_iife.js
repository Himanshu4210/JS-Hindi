// Immediately invoked Function Expression(IIFE)

// named iife
( function one(){
    console.log("One")
}

)();

// simple iife
( (name)=>{
    console.log(`Your name is ${name}`)
}

)("Himanshu")
