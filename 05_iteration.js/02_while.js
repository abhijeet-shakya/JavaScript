// while

let i = 0

while(i <= 10){
    // console.log(`value of i is ${i}`);
    i = i + 2
}

const myArr = ["Abhi", "Jeet", "Shakya"]

let arr = 0

while(arr < myArr.length){
    // console.log(`value is ${myArr[arr]}`);
    arr++
}


// do while
// kaam phele condition baad mai check
// ek baar toh chlega hii do while loop

let score = 1
do {
    console.log(`Score is ${score}`);
    if(score == 5){
        console.log(`Highest score is ${score}`);
        break
    }
    score = score + 2
    
} while (score <= 10);