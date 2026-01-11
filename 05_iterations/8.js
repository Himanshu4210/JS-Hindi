// Reduce

const myNums = [1,2,3]

const newNums = myNums.reduce( function(acc,currVal){
    //console.log(`Acc: ${acc} and CurrVal: ${currVal}`);
    //return acc+currVal
},0)

//console.log(newNums);

const myTotal = myNums.reduce( (acc,currVal) => acc+currVal,0)
//console.log(myTotal);

const Shopping = [
    {
        itemName : "js-course",
        price : 2999
    },
        {
        itemName : "ds-course",
        price : 1999
    },
        {
        itemName : "ml-course",
        price : 3999
    },
]

const myTotal1 = Shopping.reduce( (acc,item) => acc+item.price,0)
console.log(myTotal1);