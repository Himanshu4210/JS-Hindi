const myNum = [1,2,3,4,5,6,7,8,9,10]

const myNewNum = myNum.map( (n) => {return n+10})


//console.log(myNewNum);

// Chaining
const myNum1 = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum1.map( (n) => n*10)
                     .map( (n) => n+1)
                     .filter( (n) => n>=40)

//console.log(newNum);
