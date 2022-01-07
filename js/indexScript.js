"use strict"

///////////////////////////////////////////////////
//Get Started Button
///////////////////////////////////////////////////

let getStartedButton = document.querySelector("header button");
let mainContent = document.querySelector(".main-content");

getStartedButton.addEventListener("click", scrollToContent);

function scrollToContent() {
    mainContent.scrollIntoView(true);
}

////////////////////////////////////////////////////
//Nav Bar scrolling stuff
////////////////////////////////////////////////////

let header = document.querySelector("header");
let pageHeight = header.getBoundingClientRect().height;
let navbar = document.querySelector("nav");
navbar.style.position = "absolute";

document.addEventListener('scroll', adjustNavbar);

function adjustNavbar() {
    let scrollHeight = document.documentElement.scrollTop;
    if(scrollHeight >= pageHeight) {
        let diff = scrollHeight - pageHeight;
        let opacity = (1/500) * diff;
        navbar.style.top = `${scrollHeight}px`;
        navbar.style.backgroundColor = "rgba(34,34,34,1)";
        setOpacityNav(opacity);
    }
    else {
        navbar.style.top = "0px";
        navbar.style.backgroundColor = "rgba(34,34,34,0)";
        setOpacityNav(1);
    }
}

function setOpacityNav(opacity) {
    navbar.style.opacity = opacity;
}



