"use strict";

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
let navImage = document.querySelector(".nav-left img");
navbar.style.position = "absolute";

document.addEventListener("scroll", adjustNavbar);

function adjustNavbar() {
  let scrollHeight = document.documentElement.scrollTop;
  if (scrollHeight >= pageHeight) {
    navbar.style.position = "fixed";
    let diff = scrollHeight - pageHeight;
    let opacity = (1 / 500) * diff;
    navbar.style.top = "0px";
    // navbar.style.top = `${scrollHeight}px`;
    navbar.style.backgroundColor = "rgba(34,34,34,1)";
    setOpacityNav(opacity);
    navImage.style.backgroundColor = "transparent";
    navImage.style.boxShadow = "none";
  } else {
    navbar.style.display = "absolute";
    navbar.style.top = `${scrollHeight * -1}px`;
    navbar.style.backgroundColor = "rgba(34,34,34,0)";
    setOpacityNav(1);
    navImage.style.backgroundColor = "rgba(255,255,255,0.20)";
    navImage.style.boxShadow = "0 0 20px 10px rgba(255,255,255,0.24)";
  }
}

function setOpacityNav(opacity) {
  navbar.style.opacity = opacity;
}

adjustNavbar();

let hero = document.querySelector(".hero");

function setOpacityHero(opacity) {
  hero.style.opacity = opacity;
}

document.addEventListener("scroll", adjustHero);

function adjustHero() {
  let headerBox = header.getBoundingClientRect();
  let scrollHeight = document.documentElement.scrollTop;
  setOpacityHero(1/(1+Math.E**(0.02*(scrollHeight-headerBox.height+300))))
}