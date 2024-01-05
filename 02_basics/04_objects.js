// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Abhijeet"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Abhijeet",
            lastName: "Shakya"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)
// console.log(regularUser.fullName?.userFullName.firstName)


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({}, obj1, obj2)
// console.log("obj4", obj4)

// const obj5 = Object.assign(obj1, obj2)  // 1st is target object
// console.log("obj", obj1)
// console.log("obj5", obj5)

// console.log(obj5 === obj1)


const obj6 = {...obj1, ...obj2 }
// console.log(obj6)


const users =[
    {
        id: 1,
        email: "a@emai.com"
    }, 
    {
        id: 2,
        email: "b@emai.com"
    }, 
    {
        id: 3,
        email: "c@emai.com"
    }
]

// console.log(users[0].email);

console.log(tinderUser)   // { id: '123abc', name: 'Abhijeet', isLoggedIn: false }

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Abhijeet', false ]

console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'Abhijeet' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('id'));
console.log(tinderUser.hasOwnProperty('ids'));

