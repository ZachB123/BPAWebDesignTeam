"use strict"

////////////////////////////////////////
// Mobile Navigation
////////////////////////////////////////

//3 lined bar on mobile
let hamburger = document.querySelector("nav .hamburger");
//the X in top right corner on navigation screen on mobile
let mobileNavClose = document.querySelector("nav .exit-mobile-nav");

hamburger.addEventListener("click", openMobileNav);
mobileNavClose.addEventListener("click", closeMobileNav);

let mobileNav = document.querySelector("nav .mobile-nav");
let navHeight = mobileNav.getBoundingClientRect().height;

//opens the navigation screen on mobile when hamburger icon is clicked
function openMobileNav(event) {
    mobileNav.style.top = "0px";
}

//closes mobile navigations screen
function closeMobileNav(event) {
    mobileNav.style.top = -navHeight + "px";
}

////////////////////////////////////////
// Carbon Sources dropdown
////////////////////////////////////////

//the li on the navbar
let carbonSources = document.querySelector("nav .nav-right li:first-child");
//div containing the contents of the dropdown
let carbonSourcesDropdown = document.querySelector("nav #dropdown");

carbonSources.addEventListener("pointerover", showDropdown);
carbonSources.addEventListener("pointerout", hideDropdown);

//makes the dropdown with three links visible
function showDropdown(event) {
    let carbonSourcesRectangle = carbonSources.getBoundingClientRect();
    console.dir(carbonSourcesRectangle);

    carbonSourcesDropdown.style.width = carbonSourcesRectangle.width + "px";
    carbonSourcesDropdown.style.left = carbonSourcesRectangle.left + "px";
    carbonSourcesDropdown.style.display = "block";
}

function hideDropdown(event) {
    carbonSourcesDropdown.style.display = "none";
}

////////////////////////////////////////
//Contact Us Form
////////////////////////////////////////

let sendButton = document.querySelector("footer .email button");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageArea = document.querySelector("footer textarea");

sendButton.addEventListener("click", sendEmail);

function sendEmail() {
    nameInput.value = "";
    emailInput.value = "";
    messageArea.value = "";
}



function autoScrolling() {
    window.scrollTo(0,document.body.scrollHeight);
 }
 
//  setInterval(autoScrolling, 500);