const date = document.getElementById('clock');

setInterval(function(){
    date.innerText = new Date().toLocaleTimeString();
}, 1000);