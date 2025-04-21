document.addEventListener("keydown", (e) => {
    let clicked = e.code

    document.getElementsByClassName('key')[0].textContent = `key clicked is ${clicked}`;

})