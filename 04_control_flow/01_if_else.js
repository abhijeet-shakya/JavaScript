// < , > , <= , >= , == ,!= , === , !==

// console.log((2 == "2"))      // true
// console.log((2 === "2"))     // false   *check type also
// console.log((2 != "2"))      // false
// console.log((2 !== "3"))     // true


// const temp = 30

// if( temp < 50){
//     console.log("Temp is less than 50");
// } else {
//     console.log("Temp is greater than 50");
// }


// const score = 200

// if( score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);  // User Power: fly
// }
// console.log(`User Power: ${power}`);  // ReferenceError: power is not defined 
// // power variable access in if scope only


const balance = 1000

// if( balance > 500 ) console.log("test"), console.log("test2");  // test \n test2

// if (balance < 500){
//     console.log("balance is less than 500");
// } else if (balance >= 500 && balance <= 1000){
//     console.log("balance is between 500 to 1000");
// } else {
//     console.log("balance is more than 1000");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard && 2==3 ){
    console.log("Allow to buy Course");
}

if( loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
