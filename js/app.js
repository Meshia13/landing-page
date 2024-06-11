
// const menuItems = ["Home", "About", "Movies", "Subscribe"];

// Accessing the element
/**
 * Define Global Variables
 * 
*/

// Getting the <ul> element and assigning to variable
const myNav = document.getElementById("nav_list");

// Selecting all sections
const sections = document.querySelectorAll("section");

// build the nav

// This function builds the navigation bar dynamically
function buildNavbar() {
    for(const section of sections ) {
        // creating anchor elements for the 'a href' in order to scroll to that section
        const anchor = document.createElement("a");
        // creating <li> for the ul list 
        const li = document.createElement("li");
        // adding class name to elements
        li.classList.add("menu_list");
        // using the 'id" attributes from section tags to anchor them to the 'href'
        anchor.href = `#${section.id}`;
        anchor.textContent = section.dataset.nav;

        // clicking an item from the navigation menu will scroll the section into view
        anchor.addEventListener("click", function(clickEvent) {
            section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        });

        // appending acnchor to li & li to myNav(parent element)
        li.appendChild(anchor);
        myNav.appendChild(li);
    }
}
buildNavbar()