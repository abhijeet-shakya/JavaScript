const marvel_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["batman", "flash", "superman"]

/*
    Push Method (array.push(item))
    append new element end of the array,
    return new length of array
*/

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); 
// // [ 'thor', 'spiderman', 'ironman', [ 'batman', 'flash', 'superman' ] ]
// console.log(marvel_heros[3][0]);  // batman


/*
    concat method ( array.concat(items)
    Combines two or more arrays
    returns a new array without modifying any existing arrays
    @param items — Additional arrays and/or items to add to the end of the array.
*/

// const all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);  // [ 'thor', 'spiderman', 'ironman', 'batman', 'flash', 'superman' ]


// Spread

// const all_new_heros = [...marvel_heros , ...dc_heros] // spread marvel& dc heros and combine

// console.log(all_new_heros);


const another_arr = [1, 2, 3, 4, [5, 6, 7], [1, 2, 3, [4, 5]]]

// const real_another_arr = another_arr.flat(1);
// console.log(real_another_arr); // [ 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, [ 4, 5 ] ]

// const real_another_arr = another_arr.flat(Infinity);
// console.log(real_another_arr);
/*
    [
        1, 2, 3, 4, 5,
        6, 7, 1, 2, 3,
        4, 5
    ]
 */



// console.log(Array.isArray("Abhijeet"));  // false
// console.log(Array.from("jeet"));         // [ 'j', 'e', 'e', 't' ]
// console.log(Array.from({name: "Abhijeet", age: 20}));  //[]

let marks1 = 55;
let marks2 = 94;
let marks3 = 72;

const marksArr = Array.of(marks1, marks2, marks3);

console.log(marksArr);  // [ 55, 94, 72 ]