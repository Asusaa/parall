'use strict';


const back = document.querySelector('.bg');
const mountain = document.querySelector('.mountain');
const moon = document.querySelector('.moon');
const text = document.querySelector('.text');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    back.style.top = -value *0.5 + 'px';
    moon.style.left = value *0.3 + 'px';
    mountain.style.top = -value *0.1 + 'px';
    text.style.bottom = -value *0.2 + 'px';

})