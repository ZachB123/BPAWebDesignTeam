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

