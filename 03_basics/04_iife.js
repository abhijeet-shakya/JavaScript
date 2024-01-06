// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

(function chai(){
    console.log("DB Connected")
})();  

(  (name) => {
    console.log(`DB Connecte to ${name}`)
})("Abhijeet")







// add ; => end and begining for IIFE
// adding a semicolon at the end of the statement or at the beginning of the IIFE. 
// This code snippet executes without errors because you closed off the variable


/*
    IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function
 */