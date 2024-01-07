// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 8

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("Februry");
        break;
    
    case 3:
        console.log("March");
        break;
    
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("Novmber");
        break;
    case 12:
        console.log("December");
        break;
    
    default:
        console.log("Value is greater than 12");
        break;

}

// agr break nhi use krte cases mai toh jaha condition match hogyi uske baad k sare cases run kr deta hai EXCEPT default 

const num = 42
console.log(num % 2)
switch (num % 2){
    case 0:
        console.log(`${num} is even`);
        

    case 1:
        console.log(`${num} is odd`);
        

    default:
        console.log(`${num} in decimal point`);
        break;
        
}