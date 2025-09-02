$(document).ready(function() {

    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .flex .navbar');
    let contactItems = document.querySelector('.contact-items');
    let textarea = contactItems.querySelector('textarea');
    let signalNum = contactItems.querySelector('.signal_num');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    textarea.addEventListener('keyup', () => {
        let valLength = textarea.value.length;

        signalNum.innerText = valLength;

        console.log(valLength);
    });
});