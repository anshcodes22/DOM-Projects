const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.canvas');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target);
        
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === 'pink') {
            body.style.backgroundColor = event.target.id;
        } 
    })
});
