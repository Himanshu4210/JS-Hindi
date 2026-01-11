const coding = ["js","ruby","java","python","cpp"]

coding.forEach(  function (value) {
    //console.log(value);
})

// 2nd type

coding.forEach( (item) => {
    //console.log(item);
})

function printMe(item){
    console.log(item);
}

//coding.forEach(printMe);

coding.forEach( (item,index,arr) => {
    //console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : "javascript",
        langaugeFile : "js"
    },
    {
        languageName : "python",
        langaugeFile : "py"
    },
    {
        languageName : "database",
        langaugeFile : "db"
    },

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})