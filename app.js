'use strict'
//selecting UI components
const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const mobileMenu = document.querySelector('.mobile-menu')

//switching classes on click event
const toggleMenu = () => {
    openMenu.classList.toggle('hidden')
    closeMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('active')
}
//Adding event listeners to the menu icon
openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)