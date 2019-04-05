'use strict'

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

prev.addEventListener ("click", prevSlide)
next.addEventListener("click", nextSlide)

function nextSlide() {
    let currentItem = document.querySelector('.active');
    currentItem.classList.remove('active');
    if (currentItem.nextElementSibling != null) {
        currentItem.nextElementSibling.classList.add("active");
    } else {
        currentItem.parentNode.firstElementChild.classList.add('active')
    }
}

function prevSlide() {
    let currentItem = document.querySelector('.active');
    currentItem.classList.remove('active');
    currentItem.classList.add('previous')
    if (currentItem.previousElementSibling != null) {
        currentItem.previousElementSibling.classList.add("active");
    } else {
        currentItem.parentNode.lastElementChild.classList.add("active");
    }
}