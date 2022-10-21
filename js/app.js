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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const ELEMENT_OFFSET_LIMIT = 150;
const sections = document.querySelectorAll('section');

/*
 * End Global Variables
 * Start Helper Functions
 * 
*/

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const addClassToElement = (section, className) => {
    section.classList.add(className);
};

const removeClassFromElement = (section, className) => {
    section.classList.remove(className);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNavMenu() {

    const navbarList = document.getElementById('navbar__list')
    navbarList.innerHTML = `
    <li><a class="menu__link" href="#section1" data-section-id="section1">Section 1</a></li>
        <li><a class="menu__link" href="#section2" data-section-id="section2">Section 2</a></li>
        <li><a class="menu__link" href="#section3" data-section-id="section3">Section 3</a></li>
        <li><a class="menu__link" href="#section4" data-section-id="section4">Section 4</a></li>
    </ul>
    `;
}
// Add class 'active' to section when near top of viewport


//implementating the actual function

const onWindowScroll = () => {
    sections.forEach(section => {
        removeClassFromElement(section, 'section-active')

        const elementOffset = offset(section);

        if (elementOffset < ELEMENT_OFFSET_LIMIT && elementOffset >= -ELEMENT_OFFSET_LIMIT) {
            addClassToElement(section, 'section-active');
        }
    });
};


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavMenu()

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll' , onWindowScroll);