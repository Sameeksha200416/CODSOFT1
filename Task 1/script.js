'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
navToggleBtn.addEventListener("click",function(){
    header.classList.toggle("nav-active");
    this.classList.toggle("active");
});
/*toggle the navbar when click any navbar link */
const navbarLinks = document.querySelector("[data-nav-link");
for(let i=0;i<navbarLinks.length;i++){
    navbarLinks[i].addEventListener("click",function(){
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toogle("active");
    });
}