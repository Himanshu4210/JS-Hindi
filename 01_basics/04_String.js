const name = "himanshu"
const repoCount = 3

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('himanshu-S-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

// for Slicing the String 

// In SunString if we use -ve value it ignores and print the value 

const newString = gameName.substring(0,4);
//console.log(newString);

// In Slice if we use -ve Value it print value from reverse side

const anotherString = gameName.slice(-7,4);
//console.log(anotherString);

const newStringOne = "   hiamnshu    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "http://himanshu.com/himanshu%20S"
console.log(url.replace('%20', '_'));
console.log(url.includes('himanshu'));
console.log(url.includes('@'));

console.log(gameName.split('-'));

