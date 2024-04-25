const promotionMessages = [
    "DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798",
    "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379",
    "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"
];

// Get the reference to the element with ID "msg"
const msg = document.getElementById("message");

// Initialize flag to false
let flag = false;

// Initialize rand
let rand = Math.floor(Math.random() * 3);

// Assign a random message from the promotionMessages array to the textContent of the "msg" element
var currMsg = promotionMessages[rand];
msg.innerText = currMsg;

function changeMsg() {
    rand++;
    currMsg = promotionMessages[rand % promotionMessages.length];
    msg.innerText = currMsg;
}

setInterval(changeMsg, 3000);
