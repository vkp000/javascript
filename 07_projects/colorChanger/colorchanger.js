document.querySelectorAll('.button').forEach(butan => {
    butan.addEventListener('click', (event) => {
      let colorr = event.target.id;
      document.body.style.backgroundColor = colorr;
    })
  })
  
  