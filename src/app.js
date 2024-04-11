const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    if (window.innerWidth <= 750){
        nav.classList.toggle("active");
        header.classList.toggle("active");
    }

});