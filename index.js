const header=document.querySelector("header")
window.addEventListener("scroll",function(){
header.classList.toggle("sticky")
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.nav-icon');
    const nav = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});









