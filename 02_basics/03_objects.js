/*
    Object ko decare krne ke do tarike hai
    1st => as constructor
    Object.create
    jb constructor se banate hai SINGLETON object bnta hai, means apne tarike ka ek hi object hai
    2nd => as literals 
   
 */

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhijeet",
    "full name": "Abhijeet Shakya",
    [mySym]: "myKey1",
    // mySym: "mykey1",  // not a symbol its a string
    age: 20,
    location: "Delhi",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// console.log(typeof JsUser.mySym);
// console.log(JsUser.mySym);

// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym])
// console.log(JsUser);


// JsUser.name = "Jeet"
// Object.freeze(JsUser)
// JsUser.name = "Abhijeet"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Ram Ram Js user");
}

JsUser.greeting2 = function(){
    console.log(`Ram Ram Js user, ${this["full name"]}`);
}

// console.log(JsUser.greeting);  // [Function (anonymous)]
console.log(JsUser.greeting());   // Ram Ram Js user \n undefined

// console.log(JsUser.greeting2);
console.log(JsUser.greeting2());