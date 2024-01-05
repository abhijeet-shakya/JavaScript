// array

const myArr = [0,1,2,3,4,5]
const heros = ["ironman", "batman", "antman"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(heros[1]);


// ******** Array Methods ********

// myArr.push(6) // add element in last 
// myArr.push(7)
// myArr.pop()  // remove last element

// myArr.unshift(9) // add element in starting 
// myArr.shift()    // remove element from starting

// console.log(myArr.includes(4));  // true
// console.log(myArr.indexOf(5));   // 5

const newArr = myArr.join() // type => string  "0,1,2,3,4,5"

// console.log(newArr);        // "0,1,2,3,4,5"
// console.log(typeof newArr)  // string
// console.log(myArr);


//************ Slice and splice *********

// console.log("A", myArr);   // A [ 0, 1, 2, 3, 4, 5 ]

// array.slice(start, end)

const myn1 = myArr.slice(1,3);
/*
return a copy section of a array from start index to end-1 index(end index element not inclued)
*/

// console.log(myn1);           // [ 1, 2 ]
// console.log("B", myArr);     // B [ 0, 1, 2, 3, 4, 5 ]


// array.splice(start, end)

const myn2 = myArr.splice(1,3); 
/* 
remove  element from array, return deleted element
start - start location of removing element.
end - number of element remove
*/

// console.log(myn2);          //  [ 1, 2, 3 ]
// console.log("C", myArr);    //  C [ 0, 4, 5 ]

// console.log("\n",myArr.concat(3,4,5));
// console.log("D", myArr);


const myn3 = [1, 2, 3, 4, 5, 6, 7];

// console.log(myn3.splice(3));  // [ 4, 5, 6, 7 ]
// remove all element after 3rd element or (3-1) = 2nd index
// console.log(myn3);            // [ 1, 2, 3 ]

// console.log(myn3.splice(2,2));  // [ 3, 4 ]
// console.log(myn3)               // [ 1, 2, 5, 6, 7 ]




