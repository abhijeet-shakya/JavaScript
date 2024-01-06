let a = 10
const b = 20

if(true){
    a = 100
    const b = 20
    var c = 30
    // console.log("Inner:",  b);
}

// console.log(a);
// console.log("Outer:",b);  
// console.log(c);     


function one(){
    const userName = "Abhijeet"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }

    // console.log(website);

    // two()
}

// one()


if(true){
    const userName = "Abhijeet"

    if(userName == "Abhijeet"){
        const surName = " Shakya"
        // console.log(userName + surName); // Abhijeet Shakya
    }
    // console.log(surName); // ReferenceError: surName is not defined

}

// console.log(userName);  // ReferenceError: userName is not defined



// ******************** intersting ********************


console.log(addOne(4));   // 5

function addOne(num){
    return num + 1
}


// store function in addTwo variable

// console.log(addTwo(4));  // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4));  // 6

