"use strict";

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
function openMobileNav() {
  mobileNav.style.top = "0px";
}

//closes mobile navigations screen
function closeMobileNav() {
  mobileNav.style.top = "-480px";
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

// sendButton.addEventListener("click", sendEmail);

function sendEmail() {
  nameInput.value = "";
  emailInput.value = "";
  messageArea.value = "";
}

function autoScrolling() {
  window.scrollTo(0, document.body.scrollHeight);
}

//  setInterval(autoScrolling, 500);

function switchPage(event, current, newPage) {
  window.location.href = window.location.href.replace(current, newPage);
  event.preventDefault();
}

function linear(x) {
  return 3*x;
}

function r(x) {
let value = (-443/5000)*(x**2) + (33/4)*x + 61;
if(value < 0) {return 0;}
return value;
}

function g(x) {
let value = (123/2500)*(x**2) + (-186/25)*x + 252;
if(value < 0) {return 0;}
return value;
}

function b(x) {
let value = (-3/5000)*(x**2) + (3/100)*x + 3;
if(value < 0) {return 0;}
return value;
}