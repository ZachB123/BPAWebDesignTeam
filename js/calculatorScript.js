"use strict"

function dq(arg) {
    return document.querySelector(arg);
}

//make element visible
function vis(arg) {
    arg.style.display = "block";
}

function hide(arg) {
    arg.style.display = "none";
}

let carbon = 0;

let questions = document.querySelectorAll(".quiz-content");

for(let q of questions) {
    hide(q);
}

vis(questions[0]);

dq(".q0 button").addEventListener("click", () => {
    hide(questions[0]);
    vis(questions[1]);
});

dq(".q1 button").addEventListener("click", () => {
    let answers = document.getElementsByName("transportationMode");
    let answer;
    for(let a of answers) {
        if (a.checked) {
            answer = a.value;
            break;
        }
    }
    hide(questions[1]);
    switch(answer) {
        case "gasCar": vis(questions[2]); break;
        case "electricCar": vis(questions[3]); break;
        case "bus": vis(questions[4]); break;
        case "bike": vis(questions[5]); break;
        default: alert(`Something went wrong answer is ${answer}`);
    }
});

dq(".q2 button").addEventListener("click", () => {
    let time = dq("#gasTimeDriven").value;
    let diesel = dq("#fuel").value === "gas" ? false : true;
    let highway = dq("#gasDriveLocation").value === "city" ? false : true;
    if(diesel) {time *= 2;}
    if(highway) {
        carbon += time * 365 * 0.024;
    }
    else {
        carbon += time * 365 * 0.012;
    }
    hide(questions[2]);
    vis(questions[5]);
});

dq(".q3 button").addEventListener("click", () => {
    let time = dq("#electricTimeDriven").value;
    let highway = dq("#electricDriveLocation").value === "city" ? false : true;
    if(highway) {
        carbon += time * 365 * 0.013;
    }
    else {
        carbon += time * 365 * 0.0065;
    } 
    hide(questions[3]);
    vis(questions[5]);
});

dq(".q4 button").addEventListener("click", () => {
    let time = dq("#timeOnBus").value;
    carbon += (time / 60) * 0.0065;
    hide(questions[4]);
    vis(questions[5]);
});

dq(".q5 button").addEventListener("click", () => {
    let time = dq("#timeOnPlane").value;
    carbon += time * 0.025;
    hide(questions[5]);
    vis(questions[6]);
})

dq(".q6 button").addEventListener("click", () => {
    let foodMoney = dq("#weeklyFood").value;
    let packaged = dq("#packagedFood").value;
    let meatOunces = dq("#meatOunces").value;
    let localProduce = dq("#localProduce").checked;
    let partialSum = 52 * (foodMoney * 0.0000913 + packaged * 0.00068+ meatOunces * 0.0011);
    if(localProduce) {partialSum /= 2;}
    carbon += partialSum
    hide(questions[6]);
    vis(questions[7]);
});

dq(".q7 button").addEventListener("click", () => {
    let localGoods = dq("#localGoods").checked;
    let inStoreItems = dq("#storeItemsBought").value;
    let onlineItems = dq("#onlineItemsBought").value;
    let partialSum = 52 * (inStoreItems * 1.1023 * 10**-5 + onlineItems * 0.000209439);
    if(localGoods) {partialSum *= 0.8;}
    carbon += partialSum * 4;
    hide(questions[7]);
    vis(questions[8]);
});

let energy;
let source;

dq(".q8 button").addEventListener("click", () => {
    energy = dq("#energyUse").value;
    hide(questions[8]);
    vis(questions[9]);
});

dq(".q9 button").addEventListener("click", () => {
    hide(questions[9]);
    source = dq("#housePowerSource").value;
    if(source === "Solar") {vis(questions[10]);}
    else {vis(questions[11]);}
});

dq(".q10 button").addEventListener("click", () => {
    let percentSolar = dq("#solarUse").value / 100;
    carbon += percentSolar * 365 * 0.000425 + (1-percentSolar) * 365 * 0.00925;
    hide(questions[10]);
    vis(questions[12]);
})

dq(".q11 button").addEventListener("click", () => {
    let warm = dq("#warm").checked;
    let temp = 0;
    if(source === "Natural-Gas") {
        if(warm) {
            temp += 365 * 0.008;
        } else {
            temp += 365 * 0.01;
        }
    } else {
        if(warm) {
            temp += 365 * 0.015;
        } else {
            temp += 365 * 0.0425;
        }
    }
    carbon += (temp * (energy / 100));
    hide(questions[11]);
    vis(questions[12]);
});

dq(".q12 button").addEventListener("click", () => {
    let lightBulbs = dq("#efficientLightbulbs").checked;
    let appliances = dq("#efficientAppliances").checked;
    if(lightBulbs) {carbon *= 0.98;}
    if(appliances) {carbon *= 0.965;}
    console.log(carbon);
    hide(questions[12]);
    dq("#answerBox").innerHTML = `<h3>You release ${parseInt(carbon)} tons of Co2 per year</h3>`;
    vis(questions[13]);
});

dq(".q13 button").addEventListener("click", () => {
    window.location.reload();
});



