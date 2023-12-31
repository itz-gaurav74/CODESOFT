
document.addEventListener('DOMContentLoaded', function () {
// ------------------------------------------
// --- Hamburger Menu Open And Close Action 
    const menu = document.querySelector('.hamburger_menu');
    const navMenu = document.querySelector('.nav_menu')
    let navLinks = document.querySelectorAll('.nav_link');
    const backBody = document.querySelector('.back_body')
    let menuOpen = false;


    menu.addEventListener('click', function () {
        if (!menuOpen) {
            menu.classList.add('open')
            menuOpen = true
        } else {
            menu.classList.remove('open')
            menuOpen = false
        }
    })
// ----------------------------------
    let openSide = () =>{
        navMenu.classList.toggle('active')
        backBody.classList.toggle('active')
    }
    menu.addEventListener('click', openSide);
// --------------------------------------------

    let closeSide = () => {
        navMenu.classList.remove('active')
        backBody.classList.remove('active')
        menu.classList.remove('open')
        menuOpen = false
    }
    navLinks.forEach(navLink => navLink.addEventListener('click',closeSide))
// -------------------------------------------------
// -------------------------------------------------

// --- Typing Effect ---
const typedData = document.getElementById('typing_data');
const dev = "Developer"  
new Typed (typedData, { 
    strings:[`Front-End ${dev}`, `JavaScript ${dev}`, `Python ${dev}`],
    typeSpeed: 100,
    loop:true,
})
// ---------------------------------------------------
// ---------------------------------------------------

// --- Contact Pop Up Button --- 
const popupBtn = document.getElementById("contact_btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

popupBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
// ----------------------------------------------------
// ----------------------------------------------------

// --- Scroll To Top Button ---
const ScrollTop = document.querySelector('.scroll_btn')

ScrollTop.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})
// ----------------------------------------------------
// ----------------------------------------------------

// const firstInp = document.querySelector('.first');
// const thirdInp = document.querySelector('.third');
// function sendBtn(){
//     if (firstInp.value !== "" && thirdInp.value !== "") {
//         alert('Data Send!')
//     } else {
//         alert('Error : Pls Enter Required fields ')
//     }
// }

})
