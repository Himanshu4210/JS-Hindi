// Date

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());
//console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
//console.log(myCreatedDate.toDateString());

let myCreated = new Date(2023,0,23,4,5)
//console.log(myCreated.toLocaleString());

let myCreated1 = new Date("01-14-2023")
//console.log(myCreated1.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreated1.getTime());

// In Seconds
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
    
})