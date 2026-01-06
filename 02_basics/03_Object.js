// singleton uses in constructor not in literals
// object.create


// object literals 

const mySym = Symbol("myKey1")

const JsUser = {
    name: "Hitesh",
    [mySym]: "myKey1",
    "full name": "Raj",
    age: 23,
    location: "lucknow",
    email: "Abc@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Staurday"]
}

// Acess Object
// 1st method normal 
//console.log(JsUser.name);

//2nd method 
 //console.log(JsUser["email"]);
 //console.log(JsUser["full name"]);
//console.log(typeof JsUser.mySym);
 //console.log(JsUser[mySym]);

JsUser.email = "Abc@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "Abc@microsoft.com" // This value not propogate because we freeze the value in early.
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js User`, `${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());