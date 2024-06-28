/*!
	* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
	* Copyright 2013-2022 Start Bootstrap
	* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
	
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
		}
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
			} else {
            navbarCollapsible.classList.add('navbar-shrink')
		}
		
	};
	
    // Shrink the navbar 
    navbarShrink();
	
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
	
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
		});
	};
	
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
	);
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
			}
		});
	});
	
});

//My edits

function addNewJob(item){
	
	var newTrElement = document.createElement('tr');
	
	var newTdElement = createNewTdElement(job-id);
	newTrElement.appendChild(newTdElement);
	
	var newTdElement = createNewTdElement(site-loc);
	newTrElement.appendChild(newTdElement);
	
	var newTdElement = createNewTdElement(porta-num);
	newTrElement.appendChild(newTdElement);
	
	var newTdElement = createNewTdElement(porta-state);
	newTrElement.appendChild(newTdElement);
	
	var newTdElement = createNewTdElement(dumpster-num);
	newTrElement.appendChild(newTdElement);
	
	var newTdElement = createNewTdElement(dumpster-state);
	newTrElement.appendChild(newTdElement);
	
	document.getElementById('statusReport').appendChild(newTrElement);
}

function createNewTdElement(cell_content){
	var newTextNode = document.createTextNode(cell_content);
	var newTdElement = document.createElement('td');
	newTdElement.appendChild(newTextNode);
	return newTdElement;
}

