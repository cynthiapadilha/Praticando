const form = document.getElementById('form');

form.addEventListener('submit', function (event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal!';
    } else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você está acima do peso!';
    } else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado! Você está com obesidade moderada!';
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;

});