const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (vkp) => {
        console.log(vkp);
        console.log(e.target); 
        if(vkp.target.id == 'grey'){
            body.style.backgroundColor = vkp.target.id;
        }
        if(vkp.target.id == 'white'){
            body.style.backgroundColor = vkp.target.id;
        }
        if(vkp.target.id == 'blue'){
            body.style.backgroundColor = vkp.target.id;
        }
        if(vkp.target.id == 'yellow'){
            body.style.backgroundColor = vkp.target.id;
        }
    })
});

