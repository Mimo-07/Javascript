const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const heightInInt = parseInt(height);

    const weight = document.querySelector('#weight').value;
    const weightInInt = parseInt(weight);

    const results = document.querySelector('#results');

    if(heightInInt === '' || heightInInt < 0 || isNaN(heightInInt)){
        results.innerText = `Please give a valid height ${heightInInt}`;
    } else if(weightInInt === '' || weightInInt < 0 || isNaN(weightInInt)){
        results.innerText = `Please give a valid weight ${weightInInt}`;
    } else{
        const bmi = (weightInInt/((height*height)/10000)).toFixed(2);
        let bmiHtml = `<span>${bmi}</span>`
        if(bmi >= 0 && bmi < 18.6){
            bmiHtml += `<br>Under Weight`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            bmiHtml += `<br> Normal Range`;
        }
        else{
            bmiHtml += `<br> Overweight`;
        }

        results.innerHTML = bmiHtml;
    }


})