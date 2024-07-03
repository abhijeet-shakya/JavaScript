const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('.height').value);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector('#results');

    if(height === '' || isNaN(height) || height <= 0){
        results.innerHTML = `Please provide a valid height ${height}`;
    }else if(weight === '' || isNaN(weight) || weight <= 0){
        results.innerHTML = `Please provide a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span> ${bmi} </span>`;
    }
})