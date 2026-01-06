// singleton uses in constructor not in literals
// object.create


// object literals 

const mySym = "myKey1"

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
console.log(JsUser.name);

//2nd method 
//console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);
//console.log(typeof JsUser[mySym]);