// for of
const arr = [1, 2, 3, 4, 5, 6]

for (const val of arr) {  // every element in array one by one store in val
    // console.log(val);   
}

const greeting = "Hello World!"

for(const ch of greeting){
    // console.log(ch);
}


// Maps

const map = new Map()

map.set("IN", "India")
map.set("DL", "Delhi")
map.set("UP", "Uttar Pradesh")
map.set("IN", "India")  // map store unique values

// console.log(map);    // { 'IN' => 'India', 'DL' => 'Delhi', 'UP' => 'Uttar Pradesh' }

for(const [keys, values] of map){
    // console.log(keys , ":-" , values);
}
// IN :- India
// DL :- Delhi
// UP :- Uttar Pradesh


// Objects  
// for of loop not operatable on Object

const myObj = {
    'game1': "GTA 5",
    "game2": "Takken",
    "game3": "Valorant" 
}

// for(const [key, value] of myObj){
//     console.log(Key ,":-" , value);
// }
// TypeError: myObj is not iterable

