/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sectionList = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const navBarList = document.getElementById('navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//Seachring Menu Links by textContent
let searchMenuByText = function (SearchingText) {
    const menuLinks = document.querySelectorAll('.menu__link');
    let found;

    for (var i = 0; i < menuLinks.length; i++) {
        if (menuLinks[i].textContent == SearchingText) {
            found = menuLinks[i];
            break;
        }
    }
    return found;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
    for (let i=0; i < sectionList.length; i++){
        const newLi = document.createElement('li');
        const sectionTitle = sectionList[i].getAttribute('data-nav');
        const sectionId = sectionList[i].getAttribute('id');
        const navItem = section.querySelector('h2').textContent;
        const newLink = document.createElement('a');
        newLink.href="#section"+1;
        newLink.textContent = navItem;
        newLink.addEventListener('click', function(){
            sectionList[i].scrollIntoView({behavior: "smooth"})
        }
    newLi.appendChild(newLink);
    fragment.appendChild(newLi);

}
navBarList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
function setActive(){
       for (let i=0; i < sectionList.length; i++){
           if (isInViewport(sectionList[i])){
               sectionList[i].classList.add("your-active-class");
           } else {
               sectionList[i].classList.remove("your-active-class");
           };
   }
}


// Scroll to anchor ID using scrollTO event

function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}

/**
 * End Main Functions
 * Begin Events
 *
*/
document.addEventListener('scroll', function(event){
   setActiveClass();
});

navBarList.addEventListener('click', function(event){
    scrollToElement(event)
})


// Get the navbar
var navbar = document.getElementById("header");
console.log(navbar);

// Build menu
setTimeout(buildNav, 0);
// Scroll to section on link click
scrollToElement(event);
// Set sections as active
 setActiveClass();
