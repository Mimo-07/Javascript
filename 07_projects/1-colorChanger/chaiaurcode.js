const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((node) => {
    node.addEventListener('click', function(e) {
        const id = e.target.getAttribute('id');
        body.style.backgroundColor = id;
    })
})