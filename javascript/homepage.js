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

const videos = [
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4",
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4"
];

let vidIndex = 0;

function switchVideo() {
    vidIndex = (vidIndex + 1) % videos.length;
    const videoPlayer = document.getElementById('videoCircle');
    videoPlayer.src = videos[vidIndex];
    videoPlayer.play();
}

//Functional calls
setInterval(changeMsg, 3000);
// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Event listener to switch videos when the current one ends
    document.getElementById('videoCircle').addEventListener('ended', switchVideo);
});
