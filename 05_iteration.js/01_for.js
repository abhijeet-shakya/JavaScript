// for

for (let i = 0; i < 10; i++) {
    if(i == 5){
        // console.log("5 is best number");
    }
    // console.log(i);
}


for(let i = 1; i <= 10; i++){
    // console.log(`Table of:  ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`Outer loop value ${i} and Inner loop value ${j}`);
        // console.log(`${i} * ${j} = ${i*j} `);
        
    }
}

const arr = ["flash", "superman", "batman"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}

arr.forEach(element => {
    console.log(element);
});

// break and continue

for(let i = 1; i <= 20; i++){
    
    if(i>=5 && i<= 15){
        continue
    }
    if(i == 20){
        console.log(`20 is detected`)
        break
    }
    console.log(`Value of i is ${i}`);
}