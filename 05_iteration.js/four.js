const myObj  ={
    js: "javascript",
    cpp: "C++",
    "rb": "ruby",
    swift: "swift by apple"
}

// for in loop

for (const key in myObj) {
    // console.log(key);  // js cpp rb swift
    // console.log(`${key} shortcut of ${myObj[key]}`)
}


const programming = ["js", "python", "C", "java", "matlab"]

for(const key in programming){
    // console.log(key); // 0 1 2 3 4
    // console.log(programming[key]);   // js \n python \n C \n java \n matlab
}
