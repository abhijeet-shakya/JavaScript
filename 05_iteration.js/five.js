const coding = ["js", "java", "ruby", "go"]

coding.forEach( function (val) {
    // console.log(val);
})

coding.forEach( (element) => {
    // console.log(element);
})

// function printMe(item){
//     console.log(`"${item}"`);
// }

// coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item , index, arr);
})
// js 0 [ 'js', 'java', 'ruby', 'go' ]
// java 1 [ 'js', 'java', 'ruby', 'go' ]
// ruby 2 [ 'js', 'java', 'ruby', 'go' ]
// go 3 [ 'js', 'java', 'ruby', 'go' ]


const myCoding = [
    {
        langName: "Java",
        langFileName: "java"

    },
    {
        langName: "Javascript",
        langFileName: "js"

    },
    {
        langName: "Python",
        langFileName: "py"

    }
]

myCoding.forEach( (item) => {
    // {} -> item
    console.log(item.langName);  // Java \n Javascript \n Python
} )