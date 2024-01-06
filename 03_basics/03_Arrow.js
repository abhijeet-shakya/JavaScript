const user = {
    userName: "Abhijeet",
    price: 9999,
    
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the website`);
        // console.log(this);
    }
    // this  => current context

}

// user.welcomeMessage()  // Abhijeet, welcome to the website
// user.userName = "Abhi"
// user.welcomeMessage()  // Abhi, welcome to the website
// console.log(user.userName) // Abhi

// console.log(this);   // {} (empty object)


// function chai(){
//     userName: "Abhijeet"
//     console.log(this)            // bohot kuch aayega
//     console.log(this.userName);  // undefined
// }

// const chai = function(){
//     userName: "Abhijeet"
//     console.log(this)             // bohot kuch aayega
//     console.log(this.userName);   // undefined
// }

// Arrow Funtion

const chai = () => {
    userName: "Abhijeet"
    console.log(this)            // {}
    console.log(this.userName);  // undefined
}

// chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// Implicit Return
// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  ( num1 + num2 )

// const addTwo = (num1 , num2) =>  { sum: num1 + num2} // undefined  ({} => use return)

const addTwo = (num1 , num2) =>  ({ sum: num1 + num2}) // return object imlicitly


console.log(addTwo(1,2));  // 3

// {} use kra toh return likhna pdega nhi toh nhi likhna

/*
    An implicit return is a way of returning a value from a function without explicitly using the return keyword. This can be done by using arrow functions, which have a shorthand syntax that allows you to omit the return keyword when the function only has one expression.
*/

// function(){}
// () => {}
// () => ()


