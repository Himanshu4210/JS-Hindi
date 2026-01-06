const marvel = ["Spiderman","Ironman","Captain"]
const dc = ["Superman","Batman","flash"]

//marvel.push(dc)
//console.log(marvel);


//const all = marvel.concat(dc)
//console.log(all);

// Spearedout method

const all1 = [...marvel,...dc]
//console.log(all1);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

console.log(Array.isArray("Himanshu"));
console.log(Array.from("Himanshu"));
console.log(Array.from({name: "Himanshu"})); // Interseting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
