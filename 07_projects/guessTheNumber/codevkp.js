const oldvals = [];
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const valu = document.getElementById('guessField').value;
    let hiddenNumber = Math.floor(Math.random() * 100 + 1);

    let val = document.getElementsByClassName('lastResult')[0].textContent;

    if (valu >= 1 && valu <= 100 && val > 0) {
        if (hiddenNumber === valu) {
            document.getElementById('guess').innerText = "You Won";
        }
        oldvals.push(Number(valu));
        document.getElementsByClassName('guesses')[0].textContent = oldvals.join(',');
        document.getElementsByClassName('lastResult')[0].textContent = String(Number(val) - 1);

        document.getElementById('guessField').value = '';
    }

})