function sayMyName(){
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}

// sayMyName  => function ka reference
// sayMyName  => function execute
// sayMyName()

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }

// num1 & num2 are parameter
function addTwoNumbers(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,4)   // 3,4 are argumnets / jo value pass krte hai
// console.log("Result:", result);


function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhijeet"))  // Abhijeet just logged in
// console.log(loginUserMessage())            //Please enter a username  \n undefined

// console.log(loginUserMessage())   // undefined just logged in (without if condition)


// jeet is default value if value not pass in function call

function message(username = "Jeet" , gender = "male"){
    if(gender === "male"){
        return `Ram Ram ${username} bhai`
    }else if(gender == "female"){
        return `Ram Ram ${username} bhen`
    }
    return `Pass value of gender male/female`
}

// console.log(message("Abhi"));


function calculateCartPrice(val1 , val2 , ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 220, 400, 922, 100));

const user ={
    item: "pen",
    price: 10
}

function handleObject(anyObject){
    console.log(`Item name is ${anyObject.item} & its price is ${anyObject.price} rupees`);
}
// handleObject(user) //Item name is pen & its price is 10
// handleObject({item: "pencil", price: 20}) // Item name is pencil & its price is 20 rupees

const myArr = [100, 200, 400, 500]
console.log(myArr);

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArr)); // 200
console.log(returnSecondValue(Array.from("Abhijeet")));  // b





