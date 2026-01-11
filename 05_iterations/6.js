const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num>4)
// If you open scope then return the value 
const newNums = myNums.filter( (num) => {
    return num>4
})
//console.log(newNums);

const newNums1 = []

myNums.forEach( (num) => {
    if(num>4){
        newNums1.push(num)
    }
})
//console.log(newNums1);

const books = [
    { title : 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title : 'Book Two', genre: 'Non-Fiction', publish: 1983, edition: 2000},
    { title : 'Book Three', genre: 'History', publish: 1985, edition: 1999},
    { title : 'Book Four', genre: 'Non-Fiction', publish: 1976, edition: 1979},
    { title : 'Book Five', genre: 'Science', publish: 1960, edition: 2002},
];

const userBooks = books.filter( (bk) => bk.genre === 'Fiction')
console.log(userBooks);

const userBooks1 = books.filter( (bk) => bk.edition >= 2000)
console.log(userBooks1);

const userBooks2 = books.filter( (bk) => {return bk.publish >= 1979 && 2000})
console.log(userBooks2);



