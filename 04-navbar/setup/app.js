// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav_toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links')
})