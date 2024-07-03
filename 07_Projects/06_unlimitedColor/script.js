// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i< 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
console.log(randomColor());

let interValId;

const startColorChanging = function(){
    if(!interValId){
        interValId = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.querySelector('body').style.backgroundColor = randomColor();
    }
}

const stopColorChanging = function(){
    clearInterval(interValId);
    interValId = null;
}

document.querySelector('#start').addEventListener('click',startColorChanging);

document.querySelector('#stop').addEventListener('click',stopColorChanging);
