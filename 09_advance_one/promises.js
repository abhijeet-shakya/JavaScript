const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout( function(){
        console.log("Async task done");
        resolve(); 
    },1000)
});

promiseOne.then(function(){
    console.log("Promises consumed successfully");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 done");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Abhijeet", email: "abhijeet@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); // {username: "Abhijeet", email: "abhijeet@gmail.com"}

})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Abhijeet", email: "abhi@", password: "1234"})
        }else{
            reject("Error: something went wrong")
        }
    },2000)
});

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username;
} ).then((username) => {
    console.log(username);
}).catch((error) =>{
    console.log(error);
} ).finally(() => {
    console.log("Promise over");
});


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JAVA", email: "abhi@java", password: "1234"})
        }else{
            reject("Error: Java something went wrong");
        }

    },2000);

});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
};
consumePromiseFive();

// async function getAllusers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");


//         const data =  await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(" E: ", error);
//     }

// }

// getAllusers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: ", error);
})