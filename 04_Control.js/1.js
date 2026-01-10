const userLoggedIn = true
const debitCard = true
const loggedFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course")
}

if(loggedFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}