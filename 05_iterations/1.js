// for

for(let index = 0; index < 10; index++){
    const element = index;
    if(element == 5){
        //console.log("5 is the good number");
    }
    //console.log(element);

}

for(let i=0; i<=10; i++){
    //console.log(`Outer loop is ${i}`);
    for(let j=0; j<=10; j++){
        //console.log(`Inner loop is ${j} and inner ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["Flash","Batman","Superman"]

for(let i=0; i<myArray.length; i++){
    const element = myArray[i];
    //console.log(element);
}

// Keywords 

// break and continue

for(let i=0; i<=20; i++){
    if(i==5){
        //console.log("Detected is 5");
        break;
    }
    //console.log(`Value of i is ${i}`);
}

for(let i=0; i<=20; i++){
    if(i==5){
        console.log("Detected is 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}
