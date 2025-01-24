var form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    var height = parseInt(document.querySelector('#height').value);
    var weight = parseInt(document.querySelector('#weight').value);
    var results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    var bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
    }

    
});