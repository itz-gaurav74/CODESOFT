
document.addEventListener('DOMContentLoaded', function () {
// ------------------------------------------
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


const typedData = document.getElementById('typing_data');
const dev = "Developer"  
new Typed (typedData, { 
    strings:[`Front-End ${dev}`, `Javascript ${dev}`, `Python ${dev}`],
    typeSpeed: 100,
    loop:true,
})

})
