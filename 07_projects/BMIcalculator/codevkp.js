document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    let height = document.getElementById('height').value / 100;
    let weight = document.getElementById('weight').value;
    const BMI = weight / (height * height);
  
    let category = '';
  
    if (BMI < 18.6) {
      category = 'Underweight';
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      category = 'Normal weight';
    } else {
      category = 'Overweight';
    }
  
    document.getElementById('results').innerHTML = `
    <h2>Your BMI is:${BMI.toFixed(2)}</h2>
    <p>Category: ${category}</p>`;
  });
  